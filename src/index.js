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
  
  if (remainingSum === 0) {
    // Si la suma restante es 0, entonces encontramos una combinación válida.
    finalCombinations.push([...currentCombination]); // Añadimos una copia de la combinación actual a las combinaciones finales.
    return;
  } else if (remainingSum < 0) {
    // Si la suma restante es menor que 0, entonces esta combinación no es válida.
    return;
  }

  // Iteramos a través de los candidatos comenzando desde el índice 'startFrom'.
  for (let i = startFrom; i < candidates.length; i++) {
    const candidatoActual = candidates[i]; // Tomamos el candidato actual.
    currentCombination.push(candidatoActual); // Añadimos el candidato actual a la combinación actual.
    
    // Como podemos reutilizar el mismo elemento, pasamos "i" en lugar de "i + 1"
    combinationSumRecursive(candidates, remainingSum - candidatoActual, finalCombinations, currentCombination, i);
    
    // Eliminamos el último elemento de la combinación actual para retroceder y explorar otras combinaciones.
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
const finalCombinations = []; // Inicializamos el array que contendrá todas las combinaciones finales.
combinationSumRecursive(candidates, target, finalCombinations, [], 0); // Llamamos a la función recursiva inicial.
return finalCombinations; // Retornamos todas las combinaciones finales.
};

module.exports = combinationSum;