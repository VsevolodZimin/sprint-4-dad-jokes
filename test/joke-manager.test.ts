import { describe, expect, it, vi } from "vitest";
import { getRandomDadJoke } from "../src/features/joke/data-management/dad-joke-manager.ts";
import { getRandomChuckJoke } from "../src/features/joke/data-management/chuck-norris-joke-manager.ts";
import { getRandomJoke } from '../src/features/joke/data-management/joke-manager.ts'
import { getRandomFakeChuckJoke, getRandomFakeDadJoke } from "./utils";

vi.mock('../src/features/joke/data-management/dad-joke-manager')
vi.mock('../src/features/joke/data-management/chuck-norris-joke-manager.ts')


describe('getRandomJoke', () => {
    const fakeDadJoke = getRandomFakeDadJoke();
    const fakeChuckJoke = getRandomFakeChuckJoke();
    vi.mocked(getRandomChuckJoke).mockResolvedValue(fakeChuckJoke)
    vi.mocked(getRandomDadJoke).mockResolvedValue(fakeDadJoke)

    it('should randomly choose only one joke API', async () => {
        await getRandomJoke();
        const dadCalled = vi.mocked(getRandomDadJoke).mock.calls.length > 0;
        const chuckCalled = vi.mocked(getRandomChuckJoke).mock.calls.length > 0;
        expect(dadCalled !== chuckCalled).toBe(true);
    })

    it('should return jokes in a universal format', async ()=>{
        const resp = await getRandomJoke();
        expect(resp).toHaveProperty('id');
        expect(resp).toHaveProperty('type');
        expect(resp).toHaveProperty('joke');
    })
})