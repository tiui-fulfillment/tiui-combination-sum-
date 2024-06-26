/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) => {
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  if (startFrom >= candidates.length || remainingSum < 0) {
    return finalCombinations;
  }

  currentCombination.push(candidates[startFrom]);

  combinationSumRecursive(
    candidates,
    remainingSum - candidates[startFrom],
    finalCombinations,
    currentCombination,
    startFrom // Start from doesn't change due the posibility of use the same value to complete the combination
  );

  currentCombination.pop(); // backtrack

  // Explore next candidate
  combinationSumRecursive(
    candidates,
    remainingSum,
    finalCombinations,
    currentCombination,
    startFrom + 1
  );

  return finalCombinations;
};
  
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