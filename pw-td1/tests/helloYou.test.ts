import { helloYou } from "../src/hello-funcs";
import { describe, it, expect } from "bun:test";

describe("helloYou function", () => {
    it("should return 'Hello, John!' when name is 'John'", () => {
      const result = helloYou("John");
      expect(result).toBe("Hello, John!");
    });
  
    it("should return an error message if name is empty ", () => {
      try {
        helloYou("");
      } catch (e) {
        expect(e.message).toBe("Name cannot be empty");
      }
    });
  });