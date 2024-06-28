/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  // Se instancia un arreglo vacio de las combinaciones finales
  const finalCombinations = []

  // Esta es la función que se llamara recursivamente
  // La variable startFrom se asegura de que solo se consideren candidatos desde el índice actual hacia adelante.
  // Esto significa que una vez que se selecciona un candidato, no se considerarán candidatos anteriores. 
  // Esto previene combinaciones como [2, 3, 2] y [3, 2, 2] dado que los candidatos son unicos.
  backtrack = (remainingSum, currentCombination, startFrom) => {
    // Si la suma supera el objetivo, terminamos, no hubo combinación
    if (remainingSum < 0) return;
    // Si encontramos una combinación válida, agregamos la combinación al las combinaciones finales y terminamos.
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
      return;
    }

    for (let i = startFrom; i < candidates.length; i++) {
      // Agregamos candidatos para ir probando combinaciones.
      currentCombination.push(candidates[i]);
      // No incrementamos i para poder reutilizar el mismo elemento, aquí se realiza la resta recursivamente.
      backtrack(remainingSum - candidates[i], currentCombination, i);
      // Eliminamos el último elemento para probar con otras combinaciones.
      // El arreglo se va limpiando si no se van encontrando combinaciones validas.
      // Se parte de un elemento antes si se encuentra una combinación valida.
      currentCombination.pop();
    }
  }

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