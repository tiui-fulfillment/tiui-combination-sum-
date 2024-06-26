/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
  // Si la suma restante es cero, quiere decir que hay una combinación válida.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  //Si la suma restante se vuelve negativa, se finaliza el proceso
  if (remainingSum < 0) {
    return;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    const candidate = candidates[i];
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
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
}

module.exports = combinationSum;