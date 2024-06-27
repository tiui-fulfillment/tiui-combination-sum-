const combinationSum = require('../index');

describe('combinationSum', () => {
  it('Debería encontrar todas las combinaciones con suma específica', () => {
    expect(combinationSum([1], 4)).toEqual([
      [1, 1, 1, 1],
    ]);

    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([
      [2, 2, 3],
      [7],
    ]);

    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);

    expect(combinationSum([2, 5], 3)).toEqual([]);

    expect(combinationSum([], 3)).toEqual([]);

    // No valid combinations avalaible.
    expect(combinationSum([2, 4, 6], 7)).toEqual([]);

    // Set with only target.
    expect(combinationSum([7], 7)).toEqual([[7]]);

    // Try with duplicated candidate values.
    expect(combinationSum([1, 2, 2, 3], 4)).toEqual([
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 3],
      [2, 2],
    ]);
  });
});
