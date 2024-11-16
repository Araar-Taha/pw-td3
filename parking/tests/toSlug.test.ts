import { toSlug } from "../src/utils/toSlug";
import {describe , expect , it} from "bun:test";

describe ("Teste de ToSlug",() => {
    it('doit retourner hello-hono', () => {
        const result = toSlug('Hello Hono!')
        expect(result).toBe('hello-hono')
    })
})