/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 */
const combinationSumRecursive = (
  candidates, 
  remainingSum, 
  finalCombinations, 
  currentCombination, 
  startFrom
) => {
  // Si la suma restante es negativa, no podemos encontrar una combinación válida.
  if (remainingSum < 0) return;

  // Si la suma restante es cero, hemos encontrado una combinación válida.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  // Explorar cada candidato a partir del índice startFrom.
  for (let i = startFrom; i < candidates.length; i++) {
    // Añadir el candidato actual a la combinación.
    currentCombination.push(candidates[i]);

    // Llamar recursivamente con la suma restante reducida y la combinación actualizada.
    combinationSumRecursive(
      candidates, 
      remainingSum - candidates[i], 
      finalCombinations, 
      currentCombination, 
      i
    );

    // Retroceder, eliminando el último candidato añadido.
    currentCombination.pop();
  }
};

/**
 * Algoritmo de retroceso para encontrar todas las combinaciones posibles para una suma específica.
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
