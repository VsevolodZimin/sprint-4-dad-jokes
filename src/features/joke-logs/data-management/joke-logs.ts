import type { JokeLogEntry, JokeLogEntryUpdate, Score } from "../../../utils/types.ts";
let logs: JokeLogEntry[] = [];

export function getAllEntries() {
    return logs;
}

export function getEntryById(id: string) {
    return logs.find(entry => entry.id === id);
}

export function saveEntry(id: string, joke: string, score: Score) {
    logs.push({ id, joke, score, date: new Date() })
    console.log(logs);
}

export function updateEntry(id: string, payload: JokeLogEntryUpdate) {
    let entry = getEntryById(id);
    if (entry) {
        (entry as JokeLogEntry) = { ...entry, ...payload }
        //Inefficient for large lists
        logs = getAllEntries().map(pEntry => { return pEntry.id !== entry.id ? pEntry : entry })
    }
}

