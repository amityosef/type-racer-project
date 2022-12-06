import { IStorageService, StorageService } from './storage.service';
import { LeadBoardFullResult, LeadBoardResult } from "../common/interfaces"
import { DATA_KEY } from '../common/consts';

interface IResultService {
    saveResult: (time: number, score: number) => void
    getResults: () => LeadBoardResult[];
}

export class ResultService implements IResultService {

    private readonly storageService: IStorageService = new StorageService();

    saveResult(time: number, score: number) {
        const currentResults = this.getResults();
        currentResults.push({ time, score })
        const updatedResults = currentResults.sort((result1, result2) => {
            if (result1.score > result2.score || result1 === result2) {
                return -1;
            }
            return 1;
        })
        const top5Results = updatedResults.slice(0, 5);
        const top5ResultsObject: LeadBoardFullResult = { results: top5Results };

        this.storageService.insertToStorage(top5ResultsObject, DATA_KEY);
    }

    getResults() {
        const results = this.storageService.loadFromStorage(DATA_KEY).results;
        return results ?? [];
    }
}