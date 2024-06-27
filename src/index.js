/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSumRecursive = (candidates, target) => {
  let res = [];
  
  function findCombinations(index, sum, target) {
    if (sum < 0) return;
    if (sum === 0) {
      res.push([...target]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      target.push(candidates[i]);
      findCombinations(i, sum - candidates[i], target);
      target.pop();
    }
  }

  findCombinations(0, target, []);
  return res;
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
}

module.exports = combinationSum;
