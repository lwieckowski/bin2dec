import "./converters";
import binaryToDecimal from "./converters";

describe("Binary to decimal converter", () => {
  describe("convert method", () => {
    test("converts  binary '0' to decimal 0", () => {
      const input = "0";
      const result = binaryToDecimal.convert(input);
      expect(result).toBe(0);
    });

    test("converts binary '1' to decimal 1", () => {
      const input = "1";
      const result = binaryToDecimal.convert(input);
      expect(result).toBe(1);
    });

    test("converts binary '101' to decimal 5", () => {
      const input = "101";
      const result = binaryToDecimal.convert(input);
      expect(result).toBe(5);
    });

    test("converts binary '101010101' to decimal 341", () => {
      const input = "101";
      const result = binaryToDecimal.convert(input);
      expect(result).toBe(5);
    });
  });
  describe("isValidInput method", () => {
    test("returns true for a valid input of 101", () => {
      const input = "101";
      const result = binaryToDecimal.isValidInput(input);
      expect(result).toBe(true);
    });

    test("returns false for an invalid input of 102", () => {
      const input = "102";
      const result = binaryToDecimal.isValidInput(input);
      expect(result).toBe(false);
    });

    test("returns false for an invalid input of abc", () => {
      const input = "abc";
      const result = binaryToDecimal.isValidInput(input);
      expect(result).toBe(false);
    });
  });
});
