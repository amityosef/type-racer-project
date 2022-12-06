export interface LeadBoardResult {
    time: number;
    score: number;
}

export interface LeadBoardFullResult {
    [key: string]: {
        name: string;
        score: string;
    }
}