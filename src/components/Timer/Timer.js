import React, { useEffect, useState } from 'react';
import { setTimerResult } from '../../actions/mainActions';
import { useDispatch } from "react-redux";
import './style.scss';

export default function Timer(props) {
    const { stopClock } = props;
    const dispatch = useDispatch();
    const [clockMin, setClockMin] = useState(0);
    const [clockSec, setClockSec] = useState(0);

    function runClock() {
        if (clockSec < 59) {
            setClockSec(seconds => seconds + 1);
        } else {
            setClockSec(0);
            setClockMin(clockMin + 1)
        }
    }

    useEffect(() => {
        let interval = null;

        if (!stopClock) {
            interval = setInterval(() => {
                runClock()
            }, 1000);
        } else {
            const time = { clockMin, clockSec };
            dispatch(setTimerResult(time));
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [stopClock, clockSec]);

    return (
        <div className={'timer_wrapper'}>
            <div className={'timer'}>
                <span className={'min'}>{clockMin < 10 ? `0${clockMin}` : clockMin}</span>
                <span className={'separator'}>:</span>
                <span className={'sec'}>{clockSec < 10 ? `0${clockSec}` : clockSec}</span>
            </div>
        </div>
    )
}
