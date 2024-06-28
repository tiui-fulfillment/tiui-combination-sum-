/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (

  candidates, //Numeros, para hacer las combinaciones
  remainingSum, //suma restante
  finalCombinations,
  currentCombination,
  startFrom
) => {
  //Si la suma restante es = a 0 es una combinacion valida y lo guarda en la lista de finalCominations
  if(remainingSum == 0){
      finalCombinations.push([...currentCombination]);
      return;
  }
  //Iteramos en los numetos de candidates desde el indice starFrom
  for(let i = startFrom; i < candidates.length; i++){
    if(candidates[i] <= remainingSum){ //Para cada numero de candidates, que sea menor o igual a remaininingSum 
      currentCombination.push(candidates[i]); //añadimos el candidato actual a la combinacion actual
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i);//realiza la llamada recursiva para explorar la combinacion actual con el candidato añadido y actualiza la remainingSum
      currentCombination.pop(); //Eliminamos el ultimo numero para poder retroceder y encontrar otra combinacion
    }
  }
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//Funcion para encontrar guardar las combinaciones y que sumen y den el mismo target
const combinationSum = (candidates, target) => {
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
};

module.exports = combinationSum;
