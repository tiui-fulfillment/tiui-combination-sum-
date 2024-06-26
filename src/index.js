/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations = [], currentCombination = [], startFrom = 0) => {
  // Caso base, si la suma restante es 0, entonces agregamos la combinación actual a las combinaciones finales.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations
  }

  // Caso base, si la suma restante es negativa, o si hemos explorado todos los candidatos, o si el candidato actual es mayor que la suma restante, entonces regresamos.
  if (remainingSum < 0 || startFrom === candidates.length || remainingSum < candidates[startFrom]) {
    return finalCombinations;
  }

  currentCombination.push(candidates[startFrom]);

  // Llamamos recursivamente a la función con la suma restante reducida por el candidato actual, si la suma restante es 0, entonces agregamos la combinación actual a las combinaciones finales.
  // Si la suma restante es negativa, o si hemos explorado todos los candidatos, o si el candidato actual es mayor que la suma restante, entonces regresamos. con el dado caso anterior
  combinationSumRecursive(
    candidates,
    remainingSum - candidates[startFrom],
    finalCombinations,
    currentCombination,
    startFrom
  );

  // Eliminamos el último elemento de la combinación actual para explorar otras posibilidades.
  currentCombination.pop();

  // Llamamos recursivamente a la función con el siguiente candidato.
  combinationSumRecursive(
    candidates,
    remainingSum,
    finalCombinations,
    currentCombination,
    startFrom + 1
  );

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
