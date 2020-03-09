import React from 'react';
import './style.scss';

export default function ScorePage() {
    const scoresTable = localStorage.getItem('scoresTable');
    const scores = JSON.parse(scoresTable);

    function orderScores() {
        let newOrderScores = [];
        let newOrderScore = [];

        scores.map((item, index) => {
            const filByMin = scores.filter(time => time.minutes === item.minutes);

            if (index === 0) {
                newOrderScores.push(filByMin);
            }
            else {
                const lastItem = newOrderScores[newOrderScores.length - 1];

                if (filByMin.length === lastItem.length) { return false }
                else {
                    newOrderScores.push(filByMin);
                }
            }
        });
        newOrderScores.map(item => {
            const orderScoresBySeconds = item.sort((a, b) => a.seconds - b.seconds);
            newOrderScore.push(...orderScoresBySeconds);
        });
        return newOrderScore
    }

    return (
        <div className="score_page">
            <span className={'title'}>score page</span>
            <div className={'scores_wrapper'}>
                {orderScores().map((score, index) => {
                    const seconds = score.seconds;
                    const minutes = score.minutes;
                    const clockSec = seconds < 10 ? `0${seconds}` : seconds;
                    const clockMin = minutes < 10 ? `0${minutes}` : minutes;

                    return <div className={'score_wrapper'} key={index}>
                        <span className={'table_position'}>{index + 1}.</span>
                        <span className={'time'}>{clockMin}:{clockSec}</span>
                    </div>
                })}
            </div>
        </div>
    );
}
