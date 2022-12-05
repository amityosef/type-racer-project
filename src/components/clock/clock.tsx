import React, { useState, useEffect } from 'react';
import "./clock.css"

interface ClockProps {
    setIsTimeUp: () => void;
}

export const Clock = ({ setIsTimeUp }: ClockProps) => {
    const [time, setTime] = useState<number>(30);

    const refreshClock = () => {
        setTime(time - 1);
    }

    useEffect(() => {
        if (time > 0) {
            const timerId = setInterval(refreshClock, 1000);
            return function cleanup() {
                clearInterval(timerId);
            };
        } else {
            setIsTimeUp();
        }
    }, [time]);

    return (
        <div className='clock-block'>
            {time}
        </div>
    )

}
