/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
<<<<<<< HEAD
 * @param {number} startFrom -  index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
  if (remainingSum === 0) {
      finalCombinations.push(Array.from(currentCombination));
      return;
  }

  for (let i = startFrom; i < candidates.length; i++) {
      if (candidates[i] > remainingSum) {
          break;
      }

      currentCombination.push(candidates[i]);
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i);
      currentCombination.pop();
  }
}
=======
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
    
  }
  
>>>>>>> f7837703f1751bf3d57cecdd00d066266b3284a1
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
<<<<<<< HEAD
  const finalCombinations = [];
  candidates.sort((a, b) => a - b);
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
=======
    return combinationSumRecursive(candidates, target);
>>>>>>> f7837703f1751bf3d57cecdd00d066266b3284a1
  }

module.exports = combinationSum;