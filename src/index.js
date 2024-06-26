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
  // Caso base: Si remainingSum es cero, entonces se encontró una combinación válida
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  // Se explora cada candidato iniciando del índice 'startFrom'
  for (let i = startFrom; i < candidates.length; i++) {
    // Si se excede, se salta tal candidato
    if (candidates[i] > remainingSum) continue;
    // Se añade al candidato en la combinación actual
    currentCombination.push(candidates[i]);

    // Aplicando recursividad, se explora actualizando la suma que se necesita alcanzar remainingSum
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[i],
      finalCombinations,
      currentCombination,
      i // Ya que podemos usar un mismo elemento, no se le suma la unidad
    );

    // Backtrack: se elimina el último candidato añadido para intentar con el siguiente
    currentCombination.pop();
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
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
};

module.exports = combinationSum;
