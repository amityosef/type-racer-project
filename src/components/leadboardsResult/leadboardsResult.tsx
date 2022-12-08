import { Box } from '@mui/material';
import React from 'react';
import { LeadBoardResult } from '../../common/interfaces';

interface LeadboardsResultProps {
    result: LeadBoardResult;
}

export const LeadboardsResult = ({ result }: LeadboardsResultProps) => {

    return (
        <Box
            sx={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '2rem',
                paddingLeft: '2rem',
                border: '1px solid #000',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
            }}>
            <Box
                sx={{ fontSize: 'x-large' }}>
                {result.score + " :WPM"}
            </Box>
            <Box
                sx={{ fontSize: 'x-large' }}>
                {"זמן: " + result.time}
            </Box>
        </Box>
    )

}
