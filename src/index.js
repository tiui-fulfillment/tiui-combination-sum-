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
  // Base case: If remainingSum is 0, we've found a valid combination
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  // Explore candidates starting from index startFrom
  for (let i = startFrom; i < candidates.length; i++) {
    const currentNumber = candidates[i];

    // Check if currentNumber can fit into remainingSum
    if (remainingSum >= currentNumber) {
      // Include currentNumber in currentCombination
      currentCombination.push(currentNumber);

      // Recursively find combinations with updated parameters
      combinationSumRecursive(
        candidates,
        remainingSum - currentNumber,
        finalCombinations,
        currentCombination,
        i // We can reuse the current number, hence startFrom remains i
      );

      // Backtrack: Remove the last added number to try other combinations
      currentCombination.length--;
    }
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
