const passwordValidator = require("../functions/password");

test("should fail only for all lowercase string", () => {
  expect(passwordValidator("aakrit")).toBeFalsy();
});

test("should fail only for all uppercase string", () => {
  expect(passwordValidator("AAKRIT")).toBeFalsy();
});

test("should fail only for all mix of uppercase and lowercase string", () => {
  expect(passwordValidator("AAkrit")).toBeFalsy();
});

test("should pass only when all condition matches", () => {
  expect(passwordValidator("@Al1#a2B")).toBeTruthy();
});

test("should pass only when all condition matches", () => {
  expect(passwordValidator("@AAk1#a2")).toBeTruthy();
})
