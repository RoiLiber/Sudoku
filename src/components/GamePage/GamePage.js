import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import './style.scss';

export default function Home() {
    const newGameData = useSelector(state => state.mainReducer.newGameData);
    const [gameLines, setGameLines] = useState([
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
    ]);

    useEffect(() => {
        const squares = newGameData.squares;
        let newGameLines = [...gameLines];
        console.log(squares);
        squares.map(item => {
            newGameLines[item.y].splice(item.x, 1, item.x)
        });
        setGameLines(newGameLines);
    }, [newGameData]);

    return (
        <div className={'game_wrapper'}>
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
