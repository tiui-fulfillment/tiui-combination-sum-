/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */


const combinationSumRecursive = (actual, target, arrR, candidates, resultadoCom) => {
  if (target === 0) {
    resultadoCom.push([...arrR]);
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = actual; i < candidates.length; i++) {
    arrR.push(candidates[i]);
    combinationSumRecursive(i, target - candidates[i], arrR, candidates, resultadoCom);
    arrR.pop();
  }
};

  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    resultados = []
    combinationSumRecursive(0, target, [], candidates, resultados);
    return resultados 
  }

console.log(combinationSum([1,2,3,4,5,6], 8))

module.exports = combinationSum;
