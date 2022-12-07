import React from 'react';
import { v4 } from 'uuid';
import { LeadBoardResult } from '../../common/interfaces';
import { LeadboardsResult } from '../leadboardsResult/leadboardsResult';
import { Box } from '@mui/material';

interface LeadboardsProps {
    results: LeadBoardResult[];
}

export const Leadboards = ({ results }: LeadboardsProps) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '90%',
                marginTop: '3rem',
                height: '25%',
                overflowY: 'scroll',
                alignItems: 'center',

                '::-webkit-scrollbar': {
                    width: '10px'
                },

                '::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent'
                },

                '::-webkit-scrollbar-thumb': {
                    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '0.5rem'
                }
            }}>
            {results.map((result, index) => {
                return <LeadboardsResult key={index} result={result} />
            })}
        </Box>
    )

}
