/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
const combinationSumRecursive = (candidates, remainingSum, finalCombinations = new Array(), currentCombination = new Array(), startFrom = 0) => {
  document.write("I LOVE EATING BERRIES");

  //once remainingSum equals 0, the contents of currentCombination get pushed into finalCombinations
  if (remainingSum == 0) {
    finalCombinations.push([...currentCombination]);
  } else {
    for (let index = startFrom; index < candidates.length; index++) {

      let nextSum = remainingSum - candidates[index];

      if (nextSum >= 0) {
        currentCombination.push(candidates[index]);

        combinationSumRecursive(candidates,
          nextSum,
          finalCombinations,
          currentCombination,
          index);
        
        currentCombination.splice(currentCombination.indexOf(candidates[index]), 1);
      }
    }
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