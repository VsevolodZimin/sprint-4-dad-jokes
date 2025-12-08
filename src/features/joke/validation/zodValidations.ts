import z from 'zod';
import type { ChuckJoke, DadJoke } from '../../../utils/types';

export const DadJokeZodSchema = z.object({
    id: z.string(),
    joke: z.string(),
    status: z.number(),
})

export const ChuckJokeZodSchema = z.object({
    id: z.string(),
    categories: z.union([z.array(z.string()), z.tuple([])]),
    created_at: z.string(),
    icon_url: z.string(),
    updated_at: z.string(),
    url: z.string(),
    value: z.string()
})

export function validateDadJoke(joke: DadJoke){
    const zodResult = DadJokeZodSchema.safeParse(joke);
    return zodResult.error;
}


export function validateChuckJoke(joke: ChuckJoke) {
    const zodResult = ChuckJokeZodSchema.safeParse(joke);
    return zodResult.error;
}