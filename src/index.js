/*
  Noción de la respuesta: Suponiendo que el arreglo está ordenado (todos los casos de ejemplo lo están), se hace una función recursiva que toma el primer elemento, lo pone en un array y calcula qué complemento necesita para que al sumarse el resultado sea target. Después de eso nuevamente empieza a recorrer el array buscando combinaciones que den el complemento (ya no el target). Cuando el complemento es 0, la combinación da target así que se agrega a un array combinations y se continúa eliminando el último elemento (algo así como mirar rama por rama qué sirve). Si el elemento que sigue es mayor al complemento necesario, se descarta esa suma y todas las que siguen, porque al ser todas mayores, ninguna dará la suma. Cuando ya se hayan explorado o descartado todas las ramas, se retorna el array con las combinaciones posibles, y para evitar repeticiones, se buscan sumas siempre hacia adelante del array, nunca hacia atrás (esto funciona porque también se supone que el array de candidatos no tiene números repetidos)
*/

/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

// Función que recibe como parámetros candidates (candidatos), remainingSum (número que sumado con los de currentCombination da target), finalCombinations (arreglo que se va a retornar), currentCombination (combinación actual) y startFrom (el índice desde el que se comienza a evaluar para evitar repeticiones)

const combinationSumRecursive = (candidates, remainingSum, finalCombinations, currentCombination, startFrom) => {
  // Si la suma restante es 0, se ha encontrado una combinación válida
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]); // Guardar la combinación (se pone el ... para dejarlo desestructurado)
    return;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    const candidate = candidates[i];

    // Si el candidato es mayor al número que se busca, se hace un break porque ni ese ni ninguno de los que le sigue funciona (estamos suponiendo que el array está ordenado)
    if (candidate > remainingSum) {
      break;
    }

    currentCombination.push(candidate);

    // Llamada recursiva para explorar más combinaciones comenzando desde "i"
    combinationSumRecursive(candidates, remainingSum - candidate, finalCombinations, currentCombination, i);

    // Se elimina el último elemento para poder continuar con más combinaciones diferentes
    currentCombination.pop();
  }
};

/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} target - target sum that we want to achieve with combinations.
 * @return {number[][]} - array of arrays containing valid combinations.
 */
const combinationSum = (candidates, target) => {
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
};

module.exports = combinationSum;
