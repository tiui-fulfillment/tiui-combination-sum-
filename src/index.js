/**
 * @param {number[]} candidates - Arreglo de números candidatos de donde elegir.
 * @param {number} remainingSum - La suma restante que se necesita alcanzar con la combinación actual.
 * @param {number[][]} finalCombinations - Arreglo para almacenar todas las combinaciones válidas encontradas.
 * @param {number[]} currentCombination - La combinación actual de números que se está probando.
 * @param {number} startFrom - Índice en 'candidates' desde el cual empezar a considerar elementos para evitar duplicados.
 * @return {number[][]} - Devuelve todas las combinaciones que suman al objetivo.
 */
const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations,
  currentCombination,
  startFrom
) => {
  // startFrom para asegurar que no se repitan combinaciones de candidatos.
  for (let index = startFrom; index < candidates.length; index++) {
    const currentCandidate = candidates[index];
    let remainingTarget = remainingSum - currentCandidate;

    // Si es cero,la combinación es válida.
    if (remainingSum === 0) {
      finalCombinations.push([...currentCombination]);
      return;
    }

    // Si la suma es negativa, detener la exploración adicional.
    if (remainingSum < 0) {
      return;
    }

    // Incluir el candidato actual en la combinación actual y iterar OTRA VEZ...
    currentCombination.push(currentCandidate);
    combinationSumRecursive(
      candidates,
      remainingTarget,
      finalCombinations,
      currentCombination,
      index
    );

    // Eliminar el último elemento agregado después de regresar de la iteracion para explorar otras posibilidades.
    currentCombination.pop();
  }

  // Devolver todas las combinaciones encontradas.
  return finalCombinations;
};

/**
 * @param {number[]} candidates - Arreglo de números de los cuales se pueden elegir los candidatos.
 * @param {number} target - La suma que estamos tratando de alcanzar con combinaciones de candidatos.
 * @return {number[][]} - Devuelve todas las combinaciones que suman al objetivo dado.
 */
const combinationSum = (candidates, target) => {
  // Ordernar los candidatos de menor a mayor para facilitar la comparación
  candidates.sort((a, b) => a - b);
  return combinationSumRecursive(candidates, target, [], [], 0);
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([10, 20, 2, 3, 5], 8));

// Exportar la función para ser usada en otros módulos.
module.exports = combinationSum;
