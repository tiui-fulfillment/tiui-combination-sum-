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
  remainingSum,//target
  finalCombinations,
  currentCombination,
  startFrom
) => {
  // Si el objetivo es 0
  if (remainingSum === 0) {
    // inserta dentro del array final los argumentos que tenga el array de currentCombination
    // Si el objetivo es 0 desde el inicio devulve un array vacio
    //Guarda el Array que se formo en currentCombination para llegar al objetivo
    //Este array guarda todos los arrays de combinaciones que se generen
    finalCombinations.push([...currentCombination]);
    return;
  }
  //La primera vez inicializa en 0, valor que recibe de combinationSum
  //Las siguientes iteraciones el valor sera determindado dentro de la misma funcion
  for (let i = startFrom; i < candidates.length; i++) {
    //toma el valor del numero que esta evaluando en la posicion del array
    let candidate = candidates[i];
    if (candidate > remainingSum) continue;
    //Guarda el numero evaluado en el Array de combinaciones
    currentCombination.push(candidate);
    //Llamado a la funcion dentro de la funcion
    //Modificando el objetivo 
    //Restamos el valor del total del objetivo menos el numero que se guardo temporalmente en el Array de currentCombination
    //La funcion se ejecuta n veces hasta que el objetivo sea 0

    combinationSumRecursive(
      candidates,
      remainingSum - candidate,
      finalCombinations,
      currentCombination,
      i
    );
    //Guarda un array con las combinaciones que se dieron para llegar al objetivo
    currentCombination.pop();
  }
};


//Recibe los candidatos y el objetivo del index.test
const combinationSum = (candidates, target) => {
  const finalCombinations = [];
  //Llamado a la funcion de backtracking
  combinationSumRecursive(candidates, target, finalCombinations, [], 0);
  return finalCombinations;
};

module.exports = combinationSum;
