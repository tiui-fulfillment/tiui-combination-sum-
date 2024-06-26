/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
  // Si la suma restante es negativa, no se puede encontrar una combinación válida.
  if (remainingSum < 0) return; 
  // Si la suma restante es cero, se ha encontrado una combinación válida.
  if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]); // Agregar una copia de la combinación actual a las combinaciones finales.
      return;
  }
  
  // Se itera sobre los candidatos comenzando desde el indice startFrom para evitar combinaciones duplicadas.
  for (let i = startFrom; i < candidates.length; i++) {
      currentCombination.push(candidates[i]); // Agregar el candidato actual a la combinación actual.
      //se llama recursivamente a la funcion con la suma restante actualizada y el mismo índice para permitir reutilización.
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i); 
      currentCombination.pop(); // Remover el último candidato añadido para retroceder y explorar otras combinaciones.
  }
}
  
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
  }

module.exports = combinationSum;