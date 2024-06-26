/**
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
    // We've found a valid combination
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    if (candidates[i] > remainingSum) break; // Optimization: if the candidate is greater than what's left, we can stop

    currentCombination.push(candidates[i]);
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[i],
      finalCombinations,
      currentCombination,
      i // Allow using the same number multiple times
    );
    currentCombination.pop(); // Backtrack
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
  // Sort candidates to optimize search
  candidates.sort((a, b) => a - b);
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;
