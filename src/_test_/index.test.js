const combinationSum = require('../index');
const _ = require('lodash');

test('combinationSum example 1', () => {
  const result = combinationSum([2, 3, 6, 7], 7);
  const expected = [[7], [2, 2, 3]];
  expect(_.sortBy(result, JSON.stringify)).toEqual(_.sortBy(expected, JSON.stringify));
});

test('combinationSum example 2', () => {
  const result = combinationSum([2, 3, 5], 8);
  const expected = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
  expect(_.sortBy(result, JSON.stringify)).toEqual(_.sortBy(expected, JSON.stringify));
});
