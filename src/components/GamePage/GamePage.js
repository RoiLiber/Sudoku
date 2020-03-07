import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { blankBoard, dices } from '../../consts';
import { Button } from "@material-ui/core";
import './style.scss';

export default function Home() {
    const newGameData = useSelector(state => state.mainReducer.newGameData);
    const [gameTable, setGameTable] = useState(blankBoard);
    const [dragDice, setDragDice] = useState('');
    const [dropLineAndIndex, setDropLineAndIndex] = useState('');

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
        setGameTable(newGameLines)
    }

    function clearLastDice() {
        let newGameLines = [...gameTable];

        newGameLines[dropLineAndIndex.line].splice(dropLineAndIndex.lineIndex, 1, '');
        setGameTable(newGameLines)
    }

    return (
        <div className={'game_wrapper'}>
            <div className={'game_dice'}>
                {dices.map((item, index) => {
                    return <span key={index}
                                 className={'dice'}
                                 draggable={true}
                                 onDragStart={(event) => onDragStart(event, index+1)}
                    >{item}</span>
                })}
            </div>
            <div className={'game_table'}>
                {gameTable.map((item, i) => {
                    return <div key={i} className={'line'}>
                        {item.map((square, index) => {
                            const line = i;
                            return <span key={index}
                                         className={'square'}
                                         onDragOver={(event) => !square ? onDragOver(event) : {}}
                                         onDrop={(event) => onDrop(event, line, index)}
                            >{square}</span>
                        })}
                    </div>
                })}
            </div>
            {dropLineAndIndex &&
                <div className={'clear_button_wrapper'}>
                    <Button
                        className={'clear_table'}
                        variant="text"
                        onClick={() => clearLastDice()}
                    >
                        Clear Last Dice
                    </Button>
                </div>}
        </div>
    )
}
