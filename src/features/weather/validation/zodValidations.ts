import z from 'zod';
import type { Weather } from '../../../utils/types';

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

export function validateWeather(weather: Weather){
    const zodResult = WeatherZodSchema.safeParse(weather);
    return zodResult.error;
}