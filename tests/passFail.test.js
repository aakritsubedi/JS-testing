const getResult = require('../functions/passFail');

const results = ['Distinction', 'First Division', 'Fail']

test('For Distinction percentage must be greater than or equal to 80', () => {
  let percentage = 86;
  expect(getResult(percentage)).toBe('Distinction'); 
  expect(results).toContain(getResult(percentage));
  expect(percentage).toBeGreaterThanOrEqual(80);
});

test('For First Division percentage must be greater less than 80 or greater than 60', () => {
  let percentage = 65;
  expect(getResult(percentage)).toBe('First Division'); 
  expect(results).toContain(getResult(percentage));
  expect(percentage).toBeGreaterThanOrEqual(60);
  expect(percentage).toBeLessThan(80);
});

test('Below 60 is considered to be failed', () => {
  let percentage = 45;
  expect(getResult(percentage)).toBe('Fail'); 
  expect(results).toContain(getResult(percentage));
  expect(percentage).toBeLessThan(60);
});