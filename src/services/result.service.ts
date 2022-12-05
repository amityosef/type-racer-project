import { IStorageService, StorageService } from './storage.service';
import { LeadBoardResult } from "../common/interfaces"
import { v4 } from 'uuid';

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
                return 1;
            }
            return -1;
        })
        const top5Results = updatedResults.slice(0, 5);
        const top5ResultsObject = {};
        for (const result of top5Results) {
            const id = v4();
            top5ResultsObject[id] = {}
            // top5ResultsObject[v4()] = { score: result.score, time: result.time }
        }

        this.storageService.insertToStorage()
    }

    getResults() {
        return Object.values(this.storageService.loadFromStorage("resuls"));
    }
}