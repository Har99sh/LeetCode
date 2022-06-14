/**
 * Función que al tener un número target, recorre un array, donde la suma de 
 * dos elementos del array es el target, y nos devuelve el índice de esos elementos.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let i, j = 0;
    for (let i = 0; i < nums.length; i++){        
        for ( let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] == target && i != j){

                return [i, j];
            }

        }

    }

};