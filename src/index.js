/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates, target
) => {
  let finalCombinations = [];
  const backtrack = (remainingSum, currentCombination, startFrom) => {
    //Mi caso base, si la suma restante es 0, es una combinación valida.
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
      return;
    }

    //Si la suma restante es un numero negativo la combinación es invalida
    if (remainingSum < 0) 
      return;

    //Iterar sobre los cantidatos 
    for (let i = startFrom; i < candidates.length; i++) {
      //Eliminar candidatos que execeden la suma
      if (candidates[i] > remainingSum)
        continue;
      //Evitamos las duplicaciones
      if (i > startFrom && candidates[i] === candidates[i - 1])
        continue;
      //Agregamos el cantidato actual a la combinacion
      currentCombination.push(candidates[i]);
      backtrack(remainingSum - candidates[i],currentCombination,i); 
      //Eliminar el ultimo candidato para exporar otras posibilidades
      currentCombination.pop();
    }
  };
  backtrack(target, [], 0);
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