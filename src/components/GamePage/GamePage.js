import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { blankBoard, dices } from '../../consts';
import './style.scss';

export default function Home() {
    const newGameData = useSelector(state => state.mainReducer.newGameData);
    const [gameLines, setGameLines] = useState(blankBoard);

    useEffect(() => {
        const squares = newGameData.squares;
        let newGameLines = [...gameLines];

        squares.map(item => {
            newGameLines[item.y].splice(item.x, 1, item.value)
        });
        setGameLines(newGameLines)
    }, [newGameData]);

    return (
        <div className={'game_wrapper'}>
            <div className={'game_dice'}>
                {dices.map((item, index) => {
                    return <span key={index} className={'dice'}>{item}</span>
                })}
            </div>
            <div className={'game_table'}>
                {gameLines.map((item, index) => {
                    return <div key={index} className={'line'}>
                        {item.map((square, index) => {
                            return <span key={index} className={'square'}>{square}</span>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}
