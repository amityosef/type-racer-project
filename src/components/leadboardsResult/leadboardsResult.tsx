import React from 'react';
import { LeadBoardResult } from '../../common/interfaces';
import "./leadboardsResult.css"

interface LeadboardsResultProps {
    result: LeadBoardResult;
}

export const LeadboardsResult = ({ result }: LeadboardsResultProps) => {

    return (
        <div className='leadboard-result'>
            <div className='result-name'>{result.name}</div>
            <div className='result-score'>{result.score}</div>
        </div>
    )

}
