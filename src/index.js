/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom, target) => {

  const backtrack = (startFrom, remainingSum) => {
    // Primer caso base en el que llegamos a la suma deseada
    if (remainingSum == 0){
      finalCombinations.push(currentCombination.slice().reverse())
      return
    }
    // Segundo caso base en el que la suma es mayor o llegamos al fin de los candidatos
    if(remainingSum < 0 || startFrom < 0){
      return
    }
    // Caso en el que pasamos al siguiente candidato
    backtrack(startFrom-1, remainingSum)

    // Caso en el que añadimos a la lista el candidato actual
    currentCombination.push(candidates[startFrom])
    backtrack(startFrom, remainingSum - candidates[startFrom])
    currentCombination.pop()
  }

  backtrack(startFrom, remainingSum)
  return finalCombinations
} 
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates,target) => {
    return combinationSumRecursive(candidates, target, [], [], candidates.length - 1);
  }

module.exports = combinationSum;