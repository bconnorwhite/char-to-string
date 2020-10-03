import { test, expect } from "@jest/globals";
import charToString from "../source";

test("string", () => {
  expect(charToString("a")).toBe("a");
});

test("multi-char string", () => {
  expect(charToString("abc")).toBe("a");
});

test("charCode", () => {
  expect(charToString("a".charCodeAt(0))).toBe("a");
});
