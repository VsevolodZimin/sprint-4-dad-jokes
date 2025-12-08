import { beforeEach, describe, expect, it, vi } from "vitest";
import { getRandomChuckJoke } from '../src/features/joke/data-management/chuck-norris-joke-manager.ts'
import { getRandomFakeChuckJoke, getRandomFakeDadJoke } from "./utils.ts";
import { get } from "../src/services/data-fetch-services/data-fetch-service.ts";

    
vi.mock('../src/services/data-fetch-services/data-fetch-service.ts', () => ({
    get: vi.fn()
}))

describe('getRandomChuckJoke', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return a random chuck norris joke', async () => {
        const fakeJoke = getRandomFakeChuckJoke();
        vi.mocked(get).mockResolvedValue(fakeJoke);
        expect(await getRandomChuckJoke()).toEqual(fakeJoke)
    })
})