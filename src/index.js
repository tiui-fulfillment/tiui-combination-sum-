/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  const finalCombinations = [];

  const backtrack = (currentCombination, startFrom, remainingSum) => {
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
      return;
    }

    for (let i = startFrom; i < candidates.length; i++) {
      if (candidates[i] > remainingSum) continue;

      currentCombination.push(candidates[i])
      backtrack(currentCombination, i, remainingSum - candidates[i])
      currentCombination.pop();
    }
  }

  backtrack([], 0, target)
  return finalCombinations
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