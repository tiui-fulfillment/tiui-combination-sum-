/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  candidates.sort((a,b) => a-b)
  let listCombinaciones = [];
  function backtracking(combinacionAtual,inicioIndex,suma) {
      if (suma === target) {
              listCombinaciones.push([...combinacionAtual])
          return
      }else if (suma>target) {
          return
      }
      for (let index = inicioIndex; index < candidates.length; index++) {
          let candidato = candidates[index]
          combinacionAtual.push(candidato)
          backtracking(combinacionAtual,index, suma+ candidato)
          combinacionAtual.pop()
      }
  }
  backtracking([],0,0)
  return listCombinaciones
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