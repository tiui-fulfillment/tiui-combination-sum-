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
  if (remainingSum < 0) {
    // Si la suma restante es negativa, no es necesario proseguir.
    return;
  }

  if (remainingSum === 0) {
    // Si se alcanza la suma deseada, se añade la combinación actual a la lista de combinaciones finales.
    finalCombinations.push(currentCombination.slice());
    return;
  }
  // De manera recursiva, se explorarán todas las combinaciones posibles.
  for ( let i = startFrom; i < candidates.length; i++) {
    // Se incluirá el número candidato en la combinación actual.
    currentCombination.push(candidates[i]);

    // Se explorarán nuevas combinaciones con el número candidato incluido.
    combinationSumRecursive(
      candidates,
      remainingSum - candidates[i],
      finalCombinations,
      currentCombination,
      i
    );

    // Backtrack al remover el último número candidato de la combinación actual.
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
  }

module.exports = combinationSum;