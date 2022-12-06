import { LeadBoardFullResult } from "../common/interfaces";

export interface IStorageService {
    loadFromStorage: (key: string) => LeadBoardFullResult,
    insertToStorage: (data: LeadBoardFullResult, key: string) => void,
}

export class StorageService implements IStorageService {
    loadFromStorage(key: string) {
        const data = window.localStorage.getItem(key);
        if (!!data) {
            return JSON.parse(data);
        }
        return {};
    }

    insertToStorage(data: LeadBoardFullResult, key: string) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}