/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

function combinationSumRecursive(candidates=[], target=0) {
  const result = [];

  function backtrack(remaining=0, start=0, path=[]) {
      if (remaining < 0) {
      return;
      }
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
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    return combinationSumRecursive(candidates, target);
  }

module.exports = combinationSum;