import type { Score } from "../../types";
import { SCORE } from "../../types"; 
import { getRandomJoke, getCurrentJoke, setCurrentJoke } from "../joke-apis/joke-service";
import { getAllEntries, updateEntry, saveEntry } from "../joke-log-sevice";

const jokeBox = document.getElementById("joke-message") as HTMLElement;
const poorBtn = document.getElementById("poor") as HTMLButtonElement;
const averageBtn = document.getElementById("average") as HTMLButtonElement;
const goodBtn = document.getElementById("good") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;

export function setJoke(joke: string){
    jokeBox.textContent = joke;
}

nextBtn.addEventListener('click', async () => {
    const joke = await getRandomJoke();
    setJoke(joke.joke);
    setCurrentJoke(joke);
});

poorBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.POOR);
});
averageBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.AVERAGE);
});
goodBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.GOOD);
});


function handleRatingBtn(score: Score){
    let joke = getAllEntries().find(pEntry => pEntry.id === getCurrentJoke().id);
    if(joke){
        updateEntry(joke.id, { score });
        console.log(getAllEntries());
    }
    else {
        saveEntry(getCurrentJoke().id, getCurrentJoke().joke, score);
    }
}