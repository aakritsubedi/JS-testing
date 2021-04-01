const { add } = require('../functions/add');

test('Adds 2 + 2 to equal 4', () => {
  expect(add(2,2)).toBe(4);
});

test('Adds 2 + 1 to equal 3', () => {
  expect(add(2,1)).toBe(3);
});

test('Adds 2 + 3 to not equal 4', () => {
  expect(add(2,3)).not.toBe(4);
});

test('Adds null + 1 to be 1', () => {
  expect(add(null, 1)).toBe(1);
});

test('Adds undefined + 1 to be NaN', () => {
  expect(add(undefined, 1)).toBeNaN();
});

test('Adds null + null to be 0', () => {
  expect(add(null, null)).toBe(0);
});

test('Adds "string" + "no" to be NaN', () => {
  expect(add("Aakrit", 1)).toBeNaN();
});

test('Adds "no" + "no" to be sum of numbers', () => {
  expect(add("1", "5")).toBe(6);
});

// Check for Truthy and Falsy value
/*
  - toBeNaN() matches not a no.
  - toBeNull() matches only null
  - toBeUndefined() matches only undefined
  - toBeDefined() matches the opposite of the toBeUndefined
  - toBeTruthy() matches anything that an if statement treat as true
  - toBeFalsy() matches anything that an if statement treat as false
*/