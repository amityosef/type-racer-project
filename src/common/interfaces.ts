export interface LeadBoardResult {
    time: number;
    score: number;
}

export interface LeadBoardFullResult {
    results?: {
        time: number;
        score: number;
    }[]
}