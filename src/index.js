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
  // 1) Base case
  if (remainingSum === 0) {
    return finalCombinations.push([...currentCombination]);
  }

  // 2) Recursivity
  for (let i = startFrom; i < candidates.length; i++) {
    const candidate = candidates[i];

    // A) Verify if current candidate is greater than remainingSum (target)
    if (candidate > remainingSum) continue;

    // B) Adding experimental combinations
    currentCombination.push(candidate);

    // C) Rest target for the candidate
    combinationSumRecursive(
      candidates,
      remainingSum - candidate,
      finalCombinations,
      currentCombination,
      i
    );

    // B) Backtracking delete element, for evalute new posibilitys
    currentCombination.pop();
  }

  // 3) Final finalCombinations
  return finalCombinations;
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
return combinationSumRecursive(candidates, target, [], [], 0);
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target, [], [], 0);
};

module.exports = combinationSum;
