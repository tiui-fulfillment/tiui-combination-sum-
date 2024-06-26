/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  const finalList = [];
  
  function validateSum (index, target, currentList){
    if (target == 0){
      finalList.push([...currentList]);
      return;
    }

    for(let i = index; i < candidates.length ; i++){
      if(candidates[i] <= target){
        currentList.push(candidates[i]);
        validateSum(i, target - candidates[i], currentList);
        currentList.pop()
      }
    }
  }

  validateSum(0,target,[])
  return finalList;
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