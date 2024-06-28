/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination,startFrom) => {
    if (remainingSum === 0) {
      //si devuelve cero la suma final, es valida nuestra combinacion
      finalCombinations.push([...currentCombination])
      return;
    }

    if (remainingSum < 0) {
      //si devuelve valor negativo la suma final, retorna automaticamente
      return;
    }

    //for que recorrera todos los numeros del array
    for (let i = startFrom; i < candidates.length; i++) {
      //variable para guardar el resto de la suma con el actual candidato
      let rest = remainingSum - candidates[i];

      //agrega el candidato al array de current combination
      currentCombination.push(candidates[i]);

      //ejecuta la funcion con la actualizacion de la suma final y el mismo inicio de array
      combinationSumRecursive(candidates, rest, finalCombinations, currentCombination,i)

      //elimina el candidato del array current combination
      currentCombination.pop();
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
