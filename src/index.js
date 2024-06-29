/**
 * @param {number[]} candidates - números candidatos de los que estamos eligiendo.
 * @param {number} remainingSum - suma restante después de agregar candidatos a la combinación actual.
 * @param {number[][]} finalCombinations - lista resultante de combinaciones.
 * @param {number[]} currentCombination - candidatos actualmente explorados.
 * @param {number} startFrom - índice del candidato desde el cual comenzar la exploración adicional.
 * @return {number[][]}
 */
const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations,
  currentCombination,
  startFrom
) => {
  // Caso base: si remainingSum es cero, encontramos una combinación.
  if (remainingSum === 0) {
    finalCombinations.push([...currentCombination]);
    return;
  }

  // Si remainingSum es menor que cero, no se puede encontrar una combinación válida.
  if (remainingSum < 0) {
    return;
  }

  // Explorar más combinaciones probando cada candidato.
  for (let i = startFrom; i < candidates.length; i++) {
    const currentCandidate = candidates[i];

    // Agregar el candidato a la combinación actual.
    currentCombination.push(currentCandidate);

    // Explorar recursivamente más con la suma y combinación actualizadas.
    combinationSumRecursive(
      candidates,
      remainingSum - currentCandidate,
      finalCombinations,
      currentCombination,
      i
    );

    // Retroceder: eliminar el último candidato de la combinación.
    currentCombination.pop();
  }
};

/**
 * Algoritmo de backtracking para encontrar todas las combinaciones posibles para una suma específica.
 *
 * @param {number[]} candidates - números candidatos de los que estamos eligiendo.
 * @param {number} target - la suma objetivo para encontrar las combinaciones.
 * @return {number[][]} - lista de todas las combinaciones que suman al objetivo.
 */
const combinationSum = (candidates, target) => {
  const finalCombinations = [];
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
};

module.exports = combinationSum;

