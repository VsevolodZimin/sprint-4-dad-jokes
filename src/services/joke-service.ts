import { getRandomDadJoke as getRandomDadJoke } from "./dad-joke-service.ts"
import { getRandomChuckJoke } from "./chuck-norris-joke-service.ts"
import type { Joke } from "../types.ts";

let currentJoke: Joke;

export async function getRandomJoke(): Promise<Joke> {
    const i = Math.ceil(Math.random() * 2);
    if(i === 1) {
        const joke = await getRandomDadJoke();
        return {
            id: joke.id,
            type: "DAD",
            joke: joke.joke
        }
    } 
    else if (i === 2) {
        const joke = await getRandomChuckJoke();
        return {
            id: joke.id,
            type: "CHUCK",
            joke: joke.value
        }
    }
    else throw new Error('Value out of bounds')
}

export function setCurentJoke(pJoke: Joke){
    currentJoke = pJoke;
}

export function getCurrentJoke() {
    return currentJoke;
}
