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
    startFrom) => {
      //Si la suma restante es 0, encontramos una combinacion valida.
      if(remainingSum===0){
        finalCombinations.push([...currentCombination]);
        return finalCombinations;
      }

      //Si la suma restante es menos de 0, no hay combinacion valida
      if(remainingSum<0){
        return finalCombinations;
      }


      for (let i=startFrom; i<candidates.length; i++){
        currentCombination.push(candidates[i]);

        //Llama a la funcion recursiva para actualizar los parametros.
        combinationSumRecursive(
          candidates,
          remainingSum-candidates[i],
          finalCombinations,
          currentCombination,
          i
        );
        //Quita el ultimo candidato, para ver las demas posibilidades.
        currentCombination.pop();
      }

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
    return combinationSumRecursive(candidates, target,[],[],0);
  }

module.exports = combinationSum;