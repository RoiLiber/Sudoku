import React, { useEffect, useState } from 'react';
import './style.scss';

export default function Clock(props) {
    const { stopClock } = props;
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
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [stopClock, clockSec]);

    return (
        <div className={'clock_wrapper'}>
            <div className={'clock'}>
                <span className={'min'}>{clockMin < 10 ? `0${clockMin}` : clockMin}</span>
                <span className={'separator'}>:</span>
                <span className={'sec'}>{clockSec < 10 ? `0${clockSec}` : clockSec}</span>
            </div>
        </div>
    )
}
