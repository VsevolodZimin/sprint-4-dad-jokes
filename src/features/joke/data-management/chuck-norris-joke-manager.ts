import type { ChuckJoke } from "../../../utils/types.ts";
import { get } from "../../../services/data-fetch-services/data-fetch-service.ts";
import { validateChuckJoke } from "../validation/zodValidations.ts";

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

