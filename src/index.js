/**
 * Backtracking algorithm to find all combinations of candidates that sum to a target.
 *
 * @param {number[]} candidates - Array of candidate numbers we're picking from.
 * @param {number} target - Target sum to achieve with combinations.
 * @param {number} currTotalSum - Current total sum of the combination.
 * @param {number[][]} finalCombinations - Resulting list of combinations.
 * @param {number[]} currentCombination - Currently explored candidates.
 * @param {number} startFrom - Index of the candidate to start further exploration from.
 * @returns {number[][]} - Array of combinations that sum to the target.
 */
const combinationSumRecursive = (
  candidates,
  target,
  currTotalSum = 0,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0,
) => {
  if (currTotalSum === target) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  if (currTotalSum > target || startFrom >= candidates.length) {
    return finalCombinations;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    currentCombination.push(candidates[i]);

    combinationSumRecursive(
      candidates,
      target,
      currTotalSum + candidates[i],
      finalCombinations,
      currentCombination,
      i,
    );

    currentCombination.pop();
  }

  return finalCombinations;
};

/**
 * Entry function to find all combinations of candidates that sum to a target.
 *
 * @param {number[]} candidates - Array of candidate numbers we're picking from.
 * @param {number} target - Target sum to achieve with combinations.
 * @returns {number[][]} - Array of combinations that sum to the target.
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;
