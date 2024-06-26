/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} currTotalSum - current total sum of the combination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates,
  target,
  currTotalSum = 0,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0,
) => {
  if (candidates.length === 0) {
    return finalCombinations;
  }

  if (currTotalSum === target) {
    finalCombinations.push([...currentCombination]);
    return;
  } else if (currTotalSum > target) {
    return;
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
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;
