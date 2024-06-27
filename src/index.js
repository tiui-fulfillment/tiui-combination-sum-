 /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
 const combinationSum = function (candidates, target) {
  let finalCombinations = []
  let len = candidates.length
  candidates.sort((a,b) => (a - b))
  combinationSumRecursive(finalCombinations,[],0,len,candidates,target)
  return finalCombinations;
};

/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = function (finalCombinations,currentCombination, startFrom, len, candidates, remainingSum) {
 
  if (remainingSum < 0) return;
  if (remainingSum === 0){
     finalCombinations.push([...currentCombination]);
     return;
  } 

  for (let i = startFrom; i < len; i++) {
    if (candidates[i] > remainingSum) break;
    currentCombination.push(candidates[i])
    combinationSumRecursive(finalCombinations,currentCombination,i,len,candidates, remainingSum - candidates[i]);
    currentCombination.pop();
  }
  //return(res,temp,i,len,candidates,target - candidates[i])
};

module.exports = combinationSum;
