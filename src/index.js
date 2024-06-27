/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (nums, target) =>{
  function backtracking(resto, pivote, combination, result){
      /**
       * El resto nos ayuda a saber si nuestra combinacion es buena o no.
       * Al principio tiene el valor de target.
       * resto cambiara disminuira su valor cada vez que se agregue un nuevo numero a combination
       */

      if (resto === 0){
        result.push([...combination]) //Si resto es 0 es porque hemos llegado a una combinacion valida
        return
      }

      for (let i=pivote; i < nums.length; i++ ){
        //Si el numero actual es mayor que el resto, significa que no es valido la combinacion que estamos siguiendo hasta ese punto.
        if (nums[i] > resto){ 
          continue //Ignoramos ese numero, y pasamos a probar con el siguiente.
        }

        //En otro caso, agregamos el numero en nums[i] a combination para seguir buscando una solucion.
        combination.push(nums[i])

        //Llamamos recursivamente a backtracking, actualizando el resto.
        backtracking(resto - nums[i], i, combination, result)

        //Eliminamos el ultimo elemento combination en caso de que la ultima llamada recursiva no haya encontrado ni una solucion, entonces volver y probar por otro camino
        combination.pop()
      }
  }

  //Inicializamos resultados vacios
  let result=[]

  //Primer llamada de backtracking
  backtracking(target, 0, [], result)
  return result
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