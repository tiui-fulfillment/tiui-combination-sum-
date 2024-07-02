/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  const result = [];

  const backtracking = (remain, combo, start) => {
      // Validación para ver si la suma de la combinación actual es igual al target y añadirlo al resultado o si es mayor a target no hacer nada
      if (remain === 0) {
        result.push([...combo]);
        return;
      } else if (remain < 0) {
        return;
      }

      // Explorar todos los candidatos comenzando desde el índice actual, agregamos el candidato actual a la combinación actual
      // y llamamos recursivamente a la función de retroceso con el nuevo valor de remain y el índice actual
      // luego eliminamos el último elemento de la combinación actual para explorar otras combinaciones
      for (let i = start; i < candidates.length; i++) {
        combo.push(candidates[i]);
        backtracking(remain - candidates[i], combo, i);
        combo.pop();
      }
    }

  backtracking(target, [], 0);
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