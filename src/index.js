/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = () => {
    
}

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
let result = [];
  
function combinaciones(index, currentCombination, currentSum) {
    // Caso base: si currentSum es igual al target, añadimos la combinación actual a result
    if (currentSum === target) {
        result.push(currentCombination.slice()); // Clonamos la combinación actual para evitar referencias
        return;
    }
    
    // Recorrer desde el índice index hasta el final de los candidatos
    for (let i = index; i < candidates.length; i++) {
        let candidate = candidates[i];
        // Verificar si añadir candidate no supera el target (optimización)
        if (currentSum + candidate <= target) {
            // Añadir candidate a la combinación actual
            currentCombination.push(candidate);
            // Llamada recursiva permitiendo repetir el mismo candidato
            combinaciones(i, currentCombination, currentSum + candidate);
            // quitar el último candidato añadido
            currentCombination.pop();
        }
    }
}

// Iniciar la búsqueda desde el primer candidato
combinaciones(0, [], 0);

return result;
}

module.exports = combinationSum;