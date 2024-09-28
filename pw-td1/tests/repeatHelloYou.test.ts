import { describe, it, expect } from "bun:test";
import { repeatHelloYou } from "../src/hello-funcs";

describe("repeatHelloYou function", () => {
  it("should repeat 'Hello, John!' 3 times", () => {
    const result = repeatHelloYou(3, "John");
    const expected = "Hello, John!\nHello, John!\nHello, John!\n";
    expect(result).toBe(expected);
  });

}  
);

describe("repeatHelloYou function", ()=> {
  it("should return an error if 'n' is 0", () => {
    try {
      repeatHelloYou(0, "John");
    } catch (e) {
      expect (e.message).toBe("'n' must be greater than 0");
    }
  })

})
