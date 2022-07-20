/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let sum = 0;
    let leftsum = 0;
    // nums = [1,7,3,6,5,6]
    for(let i=0;i < nums.length; i++){
        sum += nums[i];
    }
    // sum = 28
     for (let j= 0; j<nums.length; j++){
            if(leftsum === sum - leftsum - nums[j]){
                return j
            }  // 0 == 28 - 0 - 1 => 27| ls 1| 1 == 28-1-7 => 20 |8 == 28 - 8 - 3 => 17
              // 11 === 28 - 11 - 6 => 11
            leftsum += nums[j] 
        }
    
    return -1;
   
    
};