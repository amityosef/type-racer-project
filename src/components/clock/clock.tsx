import React, { useState, useEffect } from 'react';
import "./clock.css"

interface ClockProps {
    time: number;
    setTime: (time: number) => void;
}

export const Clock = ({ time, setTime }: ClockProps) => {

    const refreshClock = () => {
        setTime(time - 1);
    }

    useEffect(() => {
        if (time > 0) {
            const timerId = setInterval(refreshClock, 1000);
            return function cleanup() {
                clearInterval(timerId);
            };
        }
    }, [time]);

    return (
        <div className='clock-block'>
            {time}
        </div>
    )

}
