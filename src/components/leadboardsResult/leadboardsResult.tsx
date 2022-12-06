import React from 'react';
import { LeadBoardResult } from '../../common/interfaces';
import "./leadboardsResult.css"

interface LeadboardsResultProps {
    result: LeadBoardResult;
}

export const LeadboardsResult = ({ result }: LeadboardsResultProps) => {

    return (
        <div className='leadboard-result'>
            <div className='result-score'>{result.score + " :WPM"}</div>
            <div className='result-name'>{"זמן: " + result.time}</div>
        </div>
    )

}
