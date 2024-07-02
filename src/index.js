/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target, finalCombinations, currentCombination, startFrom) => {
    if(target === 0) {
        finalCombinations.push([...currentCombination]);
        return;
    }
    for(let i = startFrom; i < candidates.length; i++) {
        if(candidates[i] > target) break;
        currentCombination.push(candidates[i]);
        combinationSumRecursive(candidates, target - candidates[i], finalCombinations, currentCombination, i);
        currentCombination.pop();
    }
}
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    const finalCombinations = [];
    const currentCombination = [];
    combinationSumRecursive(candidates, target, finalCombinations, currentCombination, 0)
    return finalCombinations;
  }

module.exports = combinationSum;