/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
const combinationSumRecursive = (candidate, remainingSum, finalCombinations = [], currentCombination = [], startFrom = 0) => {
  // If remaining sum is 0, then currentCombination is a valid combination.
  if (remainingSum === 0) {
    finalCombinations.push(currentCombination.slice()); // make a copy of currentCombination to add to the finalCombinations.
    return; // stop the exploration.
  }

  // If remaining sum is negative, then the currentCombination is not valid.
  if (remainingSum < 0) {
    return; // currentCombination is not valid - stop the exploration.
  }

  // Try adding new candidates to currentCombination starting from startFrom.
  for (let candidateIndex = startFrom; candidateIndex < candidate.length; candidateIndex += 1) {
    const currentCandidate = candidate[candidateIndex];

    // Add current candidate to the currentCombination.
    currentCombination.push(currentCandidate);

    // Try adding new candidates with the sum = remainingSum - currentCandidate.
    combinationSumRecursive(candidate, remainingSum - currentCandidate, finalCombinations, currentCombination, candidateIndex);

    // Backtrack: remove current candidate from the current combination.
    currentCombination.pop();
  }

  return finalCombinations;
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