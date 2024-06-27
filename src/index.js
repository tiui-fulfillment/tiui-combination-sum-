/**
* @param {number[]} candidates - candidate numbers we're picking from.
* @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
* @param {number[][]} finalCombinations - resulting list of combinations.
* @param {number[]} currentCombination - currently explored candidates.
* @param {number} startFrom - index of the candidate to start further exploration from.
* @param {Set<number[]>} uniqueCombinations - set of unique combinations.
  * @return {number[][]}
  */

const combinationSumRecursive = (candidates, target) => {
  const finalCombinations = [];
  const backtrack = (startFrom, currentCombination, currentSum) => {
    // Base case.
    if (currentSum === target) {
      // Saving combination.
      finalCombinations.push([...currentCombination]);
      return;
    }

    // If there is no valid sum.
    if (currentSum > target || startFrom >= candidates.length) {
      return;
    }

    // Adding a new candidate to the possible combination.
    currentCombination.push(candidates[startFrom]);
    // Check if the combination is valid.
    backtrack(startFrom, currentCombination, currentSum + candidates[startFrom]);
    // Getting back.
    currentCombination.pop();

    // Try a new sum with the next number of the list.
    backtrack(startFrom + 1, currentCombination, currentSum);
  };

  // Starting with the first candidate.
  backtrack(0, [], 0);

  const uniqueCombinations = new Set(finalCombinations.map(combination => combination.join(',')));
  // Converting uniqueCombinations into arrays.
  return Array.from(uniqueCombinations).map(combinationStr => combinationStr.split(',').map(Number));
};

/**
* Backtracking algorithm of finding all possible combination for specific sum.
*
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
const combinationSum = (candidates, target) => {
  // Sorting candidates to get arrays by ascendent order.
  return combinationSumRecursive(candidates.sort((a, b) => a - b), target);
}

module.exports = combinationSum;
