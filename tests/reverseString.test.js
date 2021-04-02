const reverseString = require('../functions/reverseString');

test('reverseString function should exist', () => {
  expect(reverseString).toBeDefined();
});

test('String Reverse', () => {
  expect(reverseString('Aakrit Subedi')).toBe('idebuS tirkaA');
  expect(reverseString('Hello World')).toBe('dlroW olleH');
  expect(reverseString('987654321')).toBe('123456789');
  expect(reverseString('aakritsubedi9@gmail.com')).toBe('moc.liamg@9idebustirkaa');
})