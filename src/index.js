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
  remainingSum,
  finalCombinations,
  currentCombination,
  startFrom
) =>{
  if(remainingSum === 0){//Si es 0 pasa currentCom a finalComb
    finalCombinations.push([...currentCombination]);
    return;
  }

  if(remainingSum<0){//Si es menor a 0, retorna sin hacer nada
    return;
  }

  for(let i= startFrom; i<candidates.length; i++){//igualamos startFrom en i para evitar duplicados
    currentCombination.push(candidates[i]);
    combinationSumRecursive(
      candidates,
      remainingSum-candidates[i],
      finalCombinations,
      currentCombination,
      i
    );
    currentCombination.pop();
  }


}
  
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    const finalCombinations = [];
    combinationSumRecursive(candidates,target,finalCombinations,[],0);
    return finalCombinations;
  }

module.exports = combinationSum;
