/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
  // Si la suma restante es cero, hemos encontrado una combinación válida.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    const candidate = candidates[i];

    // Omitir este candidato si se sale del rango 
    if (candidate > remainingSum) continue;

    // agregar candidato a la lista de combinacion actual
    currentCombination.push(candidate);

    // Llamada recursiva con la suma restante
    combinationSumRecursive(candidates, remainingSum - candidate, finalCombinations, currentCombination, i);

    // Eliminar el último candidato añadido
    currentCombination.pop();
  }
};

/**
 * Algoritmo de backtracking para encontrar todas las combinaciones posibles para una suma específica.
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