// sum.test.js
function sum(a, b) {
  return a + b;
}

test('suma de 1 + 2 debe ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});
