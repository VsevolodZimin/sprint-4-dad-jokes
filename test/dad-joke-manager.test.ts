import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getRandomDadJoke } from '../src/features/joke/data-management/dad-joke-manager.ts';
import { get } from '../src/services/data-fetch-services/data-fetch-service.ts';
import { getRandomFakeDadJoke } from './utils.ts';

vi.mock('../src/services/data-fetch-services/data-fetch-service.ts', () => ({
    get: vi.fn()
}));

describe('getRandomDadJoke', ()=>{

    beforeEach(() => {
        vi.clearAllMocks();
    })

    it('should return a random dad joke', async () => {
        const randomJoke = getRandomFakeDadJoke();
        vi.mocked(get).mockResolvedValue(randomJoke);
        expect(await getRandomDadJoke()).toEqual(randomJoke);
    })
})