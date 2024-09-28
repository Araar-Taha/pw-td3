import { describe, it, expect } from "bun:test";
import { helloWorld } from "../src/hello-funcs";

describe("helloWorld function", () => {
  it("should return 'Hello, World!'", () => {
    const result = helloWorld();
    expect(result).toBe("Hello, World!");
  });
});