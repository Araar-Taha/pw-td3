
import {describe , expect , it} from "bun:test";
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";

describe ("test de generation d'un nombre aleatoire",() => {
    it('must return an int vallue between 100000 et 999999', () => {
        const result = generateRandomNumberId()
        expect(Number.isInteger(result)).toBe(true);
        expect(result).toBeGreaterThan(100000);
        expect(result).toBeLessThan(999999);
    })
})