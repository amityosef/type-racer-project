import { Box } from '@mui/material';
import React, { useEffect } from 'react';

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
        <Box
            sx={{
                width: '20%',
                height: '100%',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                lineHeight: '3rem',
                borderRadius: '1.2rem',
                fontSize: 'x-large'
            }}>
            {time}
        </Box>
    )

}
