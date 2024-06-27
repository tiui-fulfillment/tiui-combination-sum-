/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) =>{
  if (remainingSum === 0){
    finalCombinations.push([...currentCombination]);
    return;
  }
  for(let i = startFrom;i < candidates.length; i++){
    const candidate = candidates[i];
    if(candidate > remainingSum){
      continue;
    }
    currentCombination.push(candidate);

    combinationSumRecursive(candidates, remainingSum - candidate, finalCombinations, currentCombination, i);

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
  const result = [];
  combinationSumRecursive(candidates, target, result, [], 0);
  return result;
  };

module.exports = combinationSum;