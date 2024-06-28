/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
    
  }


  function combinationSuma(candidates, target) {
    const result = [];

    // Función auxiliar para encontrar las combinaciones
    function findCombination(sum, startIndex, combination) {
        if (sum === target) {
            result.push([...combination]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            combination.push(candidates[i]);
            findCombination(sum + candidates[i], i, combination); // i en lugar de i+1 para permitir reutilizar el mismo número
            combination.pop();
        }
    }

    findCombination(0, 0, []);
    return result;
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