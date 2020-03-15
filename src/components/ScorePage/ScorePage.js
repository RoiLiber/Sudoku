import React, { useState } from 'react';
import { NO_SCORES } from '../../consts';
import './style.scss';

export default function ScorePage() {
    const scoresTable = localStorage.getItem('scoresTable');
    const scores = JSON.parse(scoresTable);
    const [scoresList, setScoresList] = useState(orderScores(scores));

    function orderScores(scores) {
        let newOrderScores = [];
        let newOrderScore = [];

        scores && scores.map((item, index) => {
            const filByMin = scores.filter(time => time.minutes === item.minutes);

            if (index === 0) {
                newOrderScores.push(filByMin);
            }
            else {
                const isFind = newOrderScores.find(timeArray => timeArray[0].minutes === item.minutes)
                !isFind && newOrderScores.push(filByMin);
            }
        });

        const orderScoresByMinutes = newOrderScores.sort((a, b) => a[0].minutes - b[0].minutes);

        scores && orderScoresByMinutes.map(item => {
            const orderScoresBySeconds = item.sort((a, b) => a.seconds - b.seconds);

            newOrderScore.push(...orderScoresBySeconds);
        });
        return newOrderScore
    }

    function clearResult(score) {
        const filByMin = scoresList.filter(time => time.minutes !== score.minutes);
        const filBySec = scoresList.filter(time => time.minutes === score.minutes);
        const remove = filBySec.filter(time => time.seconds !== score.seconds);
        const newScoreList = [...filByMin, ...remove];

        localStorage.setItem('scoresTable', JSON.stringify(newScoreList));
        setScoresList(orderScores(newScoreList))
    }

    return (
        <div className="score_page">
            <span className={'title'}>score page</span>
            <div className={'scores_wrapper'}>
                {!scoresList.length
                    ?  <div className={'no_scores'}>
                        <span>{NO_SCORES[0]}</span>
                        <span>{NO_SCORES[1]}</span>
                    </div>
                    : scoresList.map((score, index) => {
                        const seconds = score.seconds;
                        const minutes = score.minutes;
                        const clockSec = seconds < 10 ? `0${seconds}` : seconds;
                        const clockMin = minutes < 10 ? `0${minutes}` : minutes;

                        return <div className={'score_wrapper'} key={index}>
                            <span className={'table_position'}>{index + 1}.</span>
                            <span className={'time'}>
                              {clockMin}:{clockSec}
                                <i className="far fa-times-circle"
                                   onClick={() => clearResult(score)}
                                />
                          </span>
                        </div>
                    })}
            </div>
        </div>
    );
}
