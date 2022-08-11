var _numberOfPairs= function (arr, val){
    let newArray = arr;
    for (let i = 0; i < newArray.length; i++){
        
    }
    _numberOfPairs(arr.slice(1), arr[0])
    return  pairs
}

var numberOfPairs1 = function(nums) {
    // nums = [1,2,3,1,2,4,5]
    // if nums[1] === nums[4]{
   //     remove 1 and 4
    // }

    // [1] == [1] 
    let pairset = [];
    let unpair = [];
    for(let i = 0; i < nums.length; i++){
        let ix = unpair.indexOf(nums[i])
        if( ix !== -1){
             unpair.splice(ix,1);
             pairset.push(nums[i])
        }else{
            unpair.push(nums[i])
        }
    }
        
    

    return [pairset.length, unpair.length]
 
    

};

var numberOfPairs = function(nums) {
    
    let pair = {};
    let paircount = 0;
    for(let i=0; i < nums.length; i++){
        if(pair[nums[i]]){
            console.log(pair)
            delete pair[nums[i]];
            paircount++;
        }else{
            pair[nums[i]] = 1;
        }
       
        
    }
    return [paircount, Object.keys(pair).length];
    
};

console.log(numberOfPairs([1,2,3,1,2,3,4,5]))