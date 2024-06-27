/**
 * Backtracking algorithm of finding all possible combinations for a specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];

  function backtrack(remaining, start, path) {
      if (remaining < 0) return;
      if (remaining === 0) {
          result.push([...path]);
          return;
      }
      for (let i = start; i < candidates.length; i++) {
          path.push(candidates[i]);
          backtrack(remaining - candidates[i], i, path);
          path.pop();
      }
  }
  backtrack(target, 0, []);
  return result;
}
module.exports = combinationSum;