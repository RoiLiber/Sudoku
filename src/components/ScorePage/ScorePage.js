import React from 'react';
import './style.scss';

export default function ScorePage() {
    const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="score_page">
            <span className={'title'}>score page</span>
            <div className={'scores_wrapper'}>
                {scores.map((item, index) => {
                    return <span key={index}>
                        {item}.
                    </span>
                })}
            </div>
        </div>
    );
}
