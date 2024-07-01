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
  finalCombinations, 
  currentCombination, 
  startFrom
) => {
  // Base case: if the remaining sum is equal to 0.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]); // Adds currentCombination aarray to finalCombinations uising JS spread syntax. 
    return;
  }

  /* Recursive case: 
    Iterate through the candidates array starting from 'startFrom' index which initially is set to 0 in the first call.
    Firstly, if the current canidate is greater than the remaining sum to reach the target it is skipped since it will add more than the target sum.
    Otherwise, add the current candidate to the current array combination, which initially is set as an empty array.
    Then, call the function recursively with the initial candidates array, the remaining sum minus the current candidate, the finalCombinations array, 
    the currentCombination array and the current index with the same index to allow the rehutilisation of the same candidate number.
    Finally, remove the last element from the currentCombination to allow number combinations that add up to the target sum.
  */
  for (let i = startFrom; i < candidates.length; i++) {
    if (candidates[i] > remainingSum) continue;
    currentCombination.push(candidates[i]);
    combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i);
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
  /* Create an empty array that will hold all possible combinations.
    Call the recursive function with the candidates array, the target sum, the finalCombinations array, 
    an empty array to hold the current combination to push to finalCombinations 
    and the start index set to 0 (first element of the candidates array).
    Once the recursive function is done,it will return a list of arrays with all possible combinations.
  */
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
}

module.exports = combinationSum;