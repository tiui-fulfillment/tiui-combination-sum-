/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
    //Comenzar con casos básicos, cuando excede la suma y cuando se ha alcanzado:
    if(remainingSum < 0){
      return; //Como no es un caso válido no se realiza ningun cambio
    }
    
    if(remainingSum == 0){
      finalCombinations.push([...currentCombination]); //Si la suma de las combinaciones dan el objetivo se agrega una copia de dicha combinación
      return;
    }

    /**
    Ahora se tiene que iterar sobre los candidatos para buscar las combinaciones, tomando en cuenta como startFrom la posición actual de la iteración
    y eliminando el último candidato agregado para evitar dublicación de combinaciones: 
    */

    for(var i = startFrom; i < candidates.length; i++){
      currentCombination.push(candidates[i]); //Se agrega el candidato actual a la combinación actual
      combinationSumRecursive(candidates, remainingSum - candidates[i], finalCombinations, currentCombination, i); //Se verifica la combinación actual recursivamente
      currentCombination.pop(); //Se retrocede elimninando el último candidato agregado
    }
}
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
  

  /**
  Se modifca la función de suma inicializando el array de las combinaciones finales y llamando la función recursiva para comenzar con el proceso de 
  iteración y recursividsad: 
  */

  const combinationSum = (candidates, target) => {
    const finalCombinations = [];
    combinationSumRecursive(candidates, target, finalCombinations, [], 0); //Se llama a la función recursiva
    return finalCombinations; // Se retornan las combinaciones finales
};

module.exports = combinationSum;