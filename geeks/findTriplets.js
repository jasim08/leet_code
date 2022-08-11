class Solution {
    //Function to find triplets with zero sum.
   
    
    findTriplets(arr, n )
    {
        //your code here
        let output = false;
        for(let i=0; i < n-1; i++){
            for(let j=i+1; j < n-1; j++){
                for(let k = j+1; k < n-1; k++){
                    console.log("ijk" ,arr[i] , arr[j] , arr[k])
                    if(arr[i] + arr[j] + arr[k] === 0){
                        output = true;
                        return output
                    }
                }
            }
        }
        return {"status": false, message: "not found"}
    }
}

var triplet = new Solution();
console.log(triplet.findTriplets([0, -1, 2, -3, 1], 5))