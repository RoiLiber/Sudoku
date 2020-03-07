import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { blankBoard, dices } from '../../consts';
import { Button } from "@material-ui/core";
import './style.scss';

export default function Home() {
    const newGameData = useSelector(state => state.mainReducer.newGameData);
    const [gameTable, setGameTable] = useState(blankBoard);
    const [dragDice, setDragDice] = useState('');
    const [dropLineAndIndex, setDropLineAndIndex] = useState({});
    const [isDiceValid, setIsDiceValid] = useState(true);
    const [isGameDone, setIsGameDone] = useState(false);

    useEffect(() => {
        setTable()
    }, [newGameData]);

    function setTable() {
        const squares = newGameData.squares;
        const newGameTable = [...blankBoard];

        squares.map(item => {
            newGameTable[item.y].splice(item.x, 1, item.value)
        });
        setGameTable(newGameTable)
    }

    function onDragStart(e, num) {
        setDragDice(num)
    }
    function onDragOver(e) {
        e.preventDefault();
    }
    function onDrop(e, line, lineIndex) {
        let newGameLines = [...gameTable];

        e.preventDefault();
        setDropLineAndIndex({ line, lineIndex });
        newGameLines[line].splice(lineIndex, 1, dragDice);
        diceValidation(line, lineIndex);
        setGameTable(newGameLines)
    }

    function validateDoneGame() {
        function checkClearItems() {
            let isEmpty = false;
            gameTable.map(row => {
                return row.map(item => {
                    if (!item) isEmpty = true
                })
            });
            return isEmpty
        }
        const isGameTableDone = !checkClearItems() && isDiceValid;
        setIsGameDone(isGameTableDone)
    }

    function diceValidation(line, lineIndex) {
        let square = creatSquare(lineIndex, line);

        gameTable[line].map((item, index) => {
            if (lineIndex !== index && dragDice === Number(item)) {
                setIsDiceValid(false)
            }
        });
        gameTable.map((item, index) => {
            if (line !== index && dragDice === Number(item[lineIndex])) {
                setIsDiceValid(false)
            }
        });
        square.map(item => {
            if (dragDice === Number(item)) {
                setIsDiceValid(false)
            }
        });
        validateDoneGame()
    }

    function creatSquare(rowIndex, rowNumber) {
        let newLineArray = [];

        function pushToArray(rows, indexArray) {
            rows.map(row => {
                indexArray.map(item => {
                    if (row === rowNumber && item === rowIndex) {return false}
                    else {
                        newLineArray.push(gameTable[row][item]);
                    }
                })
            })
        }

        switch (rowNumber) {
            case 0: case 1: case 2: {
                switch (rowIndex) {
                    case 0: case 1: case 2: {
                        pushToArray([0, 1, 2], [0, 1, 2]);
                        break
                    }
                    case 3: case 4: case 5: {
                        pushToArray([0, 1, 2], [3, 4, 5]);
                        break
                    }
                    case 6: case 7: case 8: {
                        pushToArray([0, 1, 2], [6, 7, 8]);
                        break
                    }
                    default: {
                        return newLineArray
                    }
                }
                break
            }
            case 3: case 4: case 5: {
                switch (rowIndex) {
                    case 0: case 1: case 2: {
                        pushToArray([3, 4, 5], [0, 1, 2]);
                        break
                    }
                    case 3: case 4: case 5: {
                        pushToArray([3, 4, 5], [3, 4, 5]);
                        break
                    }
                    case 6: case 7: case 8: {
                        pushToArray([3, 4, 5], [6, 7, 8]);
                        break
                    }
                    default: {
                        return newLineArray
                    }
                }
                break
            }
            case 6: case 7: case 8: {
                switch (rowIndex) {
                    case 0: case 1: case 2: {
                        pushToArray([6, 7, 8], [0, 1, 2]);
                        break
                    }
                    case 3: case 4: case 5: {
                        pushToArray([6, 7, 8], [3, 4, 5]);
                        break
                    }
                    case 6: case 7: case 8: {
                        pushToArray([6, 7, 8], [6, 7, 8]);
                        break
                    }
                    default: {
                        return newLineArray
                    }
                }
                break
            }
            default: {
                return newLineArray
            }
        }
        return newLineArray
    }

    function clearLastDice() {
        let newGameLines = [...gameTable];
        newGameLines[dropLineAndIndex.line].splice(dropLineAndIndex.lineIndex, 1, '');
        setGameTable(newGameLines);
        setIsDiceValid(true)
    }

    return (
        <div className={'game_wrapper'}>
            <div className={'game_dice'}>
                {dices.map((item, index) => {
                    return <span key={index}
                                 className={`dice ${isDiceValid ? 'pointer' : ''}`}
                                 draggable={isDiceValid}
                                 onDragStart={(event) => onDragStart(event, index+1)}
                    >{item}</span>
                })}
            </div>
            <div className={'game_table'}>
                {gameTable.map((item, i) => {
                    return <div key={i} className={'line'}>
                        {item.map((square, index) => {
                            const line = i;
                            const err = dropLineAndIndex.line === line
                                && dropLineAndIndex.lineIndex === index
                                && !isDiceValid;

                            return <span key={index}
                                         className={`square ${err ? 'err' : ''}`}
                                         onDragOver={(event) => !square ? onDragOver(event) : {}}
                                         onDrop={(event) => onDrop(event, line, index)}
                            >{square}</span>
                        })}
                    </div>
                })}
            </div>
            {!isDiceValid &&
                <div className={'clear_button_wrapper'}>
                    <Button
                        className={'clear_table'}
                        variant="text"
                        onClick={() => clearLastDice()}
                    >
                        Clear Last Dice
                    </Button>
                </div>}
            {isGameDone &&
                <div className={'clear_button_wrapper'}>
                    <span>Nice You Did It</span>
                    <Button
                        className={'clear_table'}
                        variant="text"
                        onClick={() => {}}
                    >
                        Done
                    </Button>
                    <Button
                        className={'clear_table'}
                        variant="text"
                        onClick={() => {}}
                    >
                        Play Again
                    </Button>
                </div>}
        </div>
    )
}
