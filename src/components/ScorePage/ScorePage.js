import React from 'react';
import { NO_SCORES } from '../../consts';
import './style.scss';

export default function ScorePage() {
    const scoresTable = localStorage.getItem('scoresTable');
    const scores = scoresTable !== "undefined" ? JSON.parse(scoresTable) : [];

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

    function clearResult(score) {
        // const newScoreList = scores.find(item => item.clockMin === score.minutes && item.clockSec === score.seconds);
        //
        // localStorage.setItem('scoresTable', JSON.stringify(newScoreList));
    }

    return (
        <div className="score_page">
            <span className={'title'}>score page</span>
            <div className={'scores_wrapper'}>
                {scoresTable !== "undefined"
                    ?  orderScores().map((score, index) => {
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
                    })
                    : <div className={'no_scores'}>
                        <span>{NO_SCORES[0]}</span>
                        <span>{NO_SCORES[1]}</span>
                    </div>}
            </div>
        </div>
    );
}
