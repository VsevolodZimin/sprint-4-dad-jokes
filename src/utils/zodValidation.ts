import z from 'zod';
import type { ChuckJoke, DadJoke, Weather } from '../types.ts';

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

export const WeatherZodSchema = z.object({
    current: z.object({
        condition: z.object({
            code: z.number(),
            text: z.string(),
            icon: z.string()
        }),
        temp_c: z.number(),
        temp_f: z.number(),
    }),
    location: z.object({
        country: z.string(),
        name: z.string(),
        localtime: z.string()
    })
})

export function validateDadJoke(joke: DadJoke){
    const zodResult = DadJokeZodSchema.safeParse(joke);
    return zodResult.error;
}


export function validateChuckJoke(joke: ChuckJoke) {
    const zodResult = ChuckJokeZodSchema.safeParse(joke);
    return zodResult.error;
}

export function validateWeather(weather: Weather){
    const zodResult = WeatherZodSchema.safeParse(weather);
    return zodResult.error;
}