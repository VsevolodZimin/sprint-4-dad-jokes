import type { DadJoke } from "../../types.ts";
import { validateDadJoke } from "../../utils/zodValidation.ts";
import { get } from "../data-fetch-service.ts";

const url = import.meta.env.VITE_DAD_API_RANDOM;
if(!url) throw new Error('Variable not defined!')

export async function getRandomDadJoke(): Promise<DadJoke> {
    const joke = (await get(url) as DadJoke);
    const zodError = validateDadJoke(joke)
    if(zodError) {
        throw new Error(`Validation failed: ${zodError}`)
    };

    return joke;   
}