import z from 'zod';
import { DadJokeZodSchema, ChuckJokeZodSchema, WeatherZodSchema } from './utils/zodValidation';

export type DadJoke = z.infer<typeof DadJokeZodSchema>;
export type ChuckJoke = z.infer<typeof ChuckJokeZodSchema>;

export const SCORE = {
    POOR: 1,
    AVERAGE: 2,
    GOOD: 3
} as const;

export type Score = typeof SCORE[keyof typeof SCORE];

export type JokeLogEntry = {
    id: string;
    joke: string;
    score: Score;
    date: Date;
}

export type JokeLogEntryUpdate = {
    joke?: string;
    score?: Score;
    date?: Date;
}

export type JokeType = 'DAD' | 'CHUCK';

export type Joke = {
    id: string;
    type: JokeType;
    joke: string;
}

export type Weather = z.infer<typeof WeatherZodSchema>

