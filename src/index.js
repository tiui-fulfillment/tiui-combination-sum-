/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
    //Compara reaminingSum con 0, si es correcto, añade combinación 
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
      return;
    }
    // Si el remainingSum es negativo, se detiene 
    if (remainingSum < 0){
      return
    }

    //iteración sobre candidates iniciado con el indice startFrom
    for(let i = startFrom; i < candidates.length; i++){
      currentCombination.push(candidates[i]); //se añade el candidato en curso a la combinación actual

      /*se llama nuevamente la función combinationSumRecursive 
      con el mismo indice para poder usar el mismo candidato y poder repetirlo
      
      RemainingSum actualizado restado por el candidato actual para la comparación que se requiere para añadir
      la combinación*/
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i); 
      
      //Se elimina el último candidato agregado para buscar otras combinaciones
      currentCombination.pop();
    }
  
}
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */                      //1         4
  const combinationSum = (candidates, target) => {
    // lista vacia para guardar las combinaciones finales
    const result = [];
    //Inicio de busqueda recursiva
    combinationSumRecursive(candidates, target, result, [], 0);
    return result;
  }

module.exports = combinationSum;