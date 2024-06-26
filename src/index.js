/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} target - the sum that combinations need to achieve.
 * @return {number[][]}
 */

/*
  Noción de la respuesta: Suponiendo que el arreglo está ordenado (todos los casos de ejemplo lo están), se hace una función recursiva que toma el primer elemento, lo pone en un array y calcula qué complemento necesita para que al sumarse el resultado sea target. Después de eso nuevamente empieza a recorrer el array buscando combinaciones que den el complemento (ya no el target). Cuando el complemento es 0, la combinación da target así que se agrega a un array combinations y se continúa eliminando el último elemento (algo así como mirar rama por rama qué sirve). Si el elemento que sigue es mayor al complemento necesario, se descarta esa suma y todas las que siguen, porque al ser todas mayores, ninguna dará la suma. Cuando ya se hayan explorado o descartado todas las ramas, se retorna el array con las combinaciones posibles, y para evitar repeticiones, se buscan sumas siempre hacia adelante del array, nunca hacia atrás (esto funciona porque también se supone que el array de candidatos no tiene números repetidos)
*/

// Función que encuentra todas las combinaciones de números del arreglo "candidates" que sumados dan "target"
const combinationSumRecursive = (candidates, target) => {

  const combinations = [];

  // Función que recibe como parámetros combination (combinación actual), complement (número que sumado con los de combination da target) y startFrom (el índice desde el que se comienza a evaluar para evitar repeticiones)

  const backtrack = (complement, combination, startFrom) => {
      if (complement == 0) {
          combinations.push([...combination]); // Guardar la combinación (se pone el ... para dejarlo desestructurado)
          return;
      }

      for (let i = startFrom; i < candidates.length; i++) {
          const candidate = candidates[i];

          if (candidate > complement) { // Si el candidato es mayor al número que se busca, se hace un break porque ni ese ni ninguno de los que le sigue funciona (estamos suponiendo que el array está ordenado)
              break;
          }

          combination.push(candidate);

          backtrack(complement - candidate, combination, i); // llamada recursiva

          combination.pop(); // Se elimina el último elemento para poder continuar con más combinaciones diferentes
      }
  }

  backtrack(target, [], 0); // Inicio de la función recursiva, se pasa el arreglo vacío porque no hay ninguna combinación de momento y el 0 porque va a iniciar desde el primer elemento del array para recorrerlo completo

  return combinations;
}

/**
* Wrapper for the combinationSumRecursive function.
*
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
}

module.exports = combinationSum;
