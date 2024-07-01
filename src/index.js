/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
    //If the combination is valid, the remianing sum is equal to zero
    if(remainingSum === 0){
      finalCombinations.push([...currentCombination]);
      return;
    }
    //The exploration is ended if the remaining sum is negative
    if(remainingSum < 0){
      return;
    }
    //Explore each candidate from startFrom
    for(let i = startFrom; i < candidates.length; i++){
      currentCombination.push(candidates[i]); //Add the current combination
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i);
      currentCombination.pop(); //Backtracking, eliminating the last candidate
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
    combinationSumRecursive(candidates, target, finalCombinations, [], 0);
    return finalCombinations;
  }

module.exports = combinationSum;