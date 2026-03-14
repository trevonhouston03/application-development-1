// week04/order.test.js
const { processOrder } = require("./order");

//
// Test 1 — Instructor test: discount applied when total > 100
//
test("applies discount when total is greater than 100", () => {
  const price = 25;
  const quantity = 5;
  const expected = (115).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

//
// Test 2 — No discount applied (total < 100)
//
test("no discount when total is less than 100", () => {
  const price = 10;
  const quantity = 5;
  const expected = (50).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

//
// Test 3 — Discount applied (total > 100)
//
test("discount applied when total exceeds 100", () => {
  const price = 30;
  const quantity = 4;
  const expected = (110).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

//
// Test 4 — Edge case (total exactly 100)
//
test("no discount when total equals exactly 100", () => {
  const price = 20;
  const quantity = 5;
  const expected = (100).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

//
// Test 5 — Invalid input (negative price or quantity)
//
test("throws error for negative quantity", () => {
  expect(() => processOrder(10, -1)).toThrow();
});

test("throws error for negative price", () => {
  expect(() => processOrder(-10, 1)).toThrow();
});
