/**
 * @param {number[]} candidates - candidate numbers we're picking from. array de numeros a evaluar
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.  suma de los numeros evaluados
 * @param {number[][]} finalCombinations - resulting list of combinations.  array que almacena las combinaciones validas
 * @param {number[]} currentCombination - currently explored candidates.  array de combinacion que se esta explorando
 * @param {number} startFrom - index of the candidate to start further exploration from.  indice desde el que comienza a explorar
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations = [], currentCombination = [], startFrom = 0) => {
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return finalCombinations;
  }

  if (remainingSum < 0) {
    return finalCombinations;
  }
  console.log(currentCombination)

  for (let i = startFrom; i < candidates.length; i++) { //[2,3,5] = 8
    currentCombination.push(candidates[i]);
    combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i);
    currentCombination.pop();
  }

  return finalCombinations;
};

const combinationSum = (candidates, target) => combinationSumRecursive(candidates, target);

module.exports = combinationSum;


// const combinationSum = (candidates, target) => {
//     return console.log(combinationSumRecursive(candidates, target)) 
//   }

//   combinationSum([2, 3, 5], 8)

module.exports = combinationSum;
