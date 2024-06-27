function combinationSum(candidates, target) {
    const result = [];

    function retro(remain, combination, start) {
        if (remain < 0) {
            return;
        } else if (remain === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            retro(remain - candidates[i], combination, i);
            combination.pop();
        }
    }

    retro(target, [], 0);
    return result;
}

// Ejemplos de prueba
console.log(combinationSum([2, 3, 6, 7], 7)); 

