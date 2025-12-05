import type { ChuckJoke } from "../../types.ts";
import { validateChuckJoke } from "../../utils/zodValidation.ts";
import { get } from "../data-fetch-service.ts";

const url = import.meta.env.VITE_CHUCK_API_RANDOM;
if(!url) throw new Error('Variable not defined!');

export async function getRandomChuckJoke(): Promise<ChuckJoke>{
    const joke = (await get(url) as ChuckJoke);
    const zodError = validateChuckJoke(joke);
    if(zodError) {
        throw new Error(`Validation failed: ${zodError}`);
    } 
    return joke;
}

