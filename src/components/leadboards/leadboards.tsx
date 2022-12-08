import React from 'react';
import { v4 } from 'uuid';
import { LeadBoardResult } from '../../common/interfaces';
import { LeadboardsResult } from '../leadboardsResult/leadboardsResult';
import "./leadboards.css"

interface LeadboardsProps {
    results: LeadBoardResult[];
}

export const Leadboards = ({ results }: LeadboardsProps) => {

    return (
        <div className='leadboard-container'>
            {results.map((result) => {
                return <LeadboardsResult key={v4()} result={result} />
            })}
        </div>
    )

}
