import React from 'react';
import { useSelector } from "react-redux";
import './style.scss';

export default function Home() {
    const newGameData = useSelector(state => state.mainReducer.newGameData);

    return (
        <div className={'game_wrapper'}>
            <div className={'game_table'}>
                {newGameData.squares.map((item, index) => {
                    return <div key={index} className={'square'}>{item.value}</div>
                })}
            </div>
        </div>
    )
}
