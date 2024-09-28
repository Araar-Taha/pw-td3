import { describe, it, expect } from "bun:test";
import { helloHuman } from "../src/hello-funcs";
import type { Human } from "../src/types";

describe("helloHuman function", () => {
  const johnDoe: Human = {
     firstName: "John",
     lastName: "Doe",
     birthYear: 1980
    };

  it("should return 'Hello, John Doe! You are 44 years old.'", () => {
    const result = helloHuman(johnDoe);
    expect(result).toBe("Hello, John Doe! You are 44 years old.");
  });

  it("should return an error message if firstname is empty", () => {
    const invalidHuman: Human = { firstName: "", lastName: "Doe", birthYear: 1980 };
    try {
      helloHuman(invalidHuman);
    } catch (e) {
      expect(e.message).toBe("Firstname cannot be empty");
    }
  });
});
