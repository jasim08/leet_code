// Sliding window - input [1, 3, 2, 2, 4, 5]  s=6
// find smallest contiguous subarray whose sum is greater than or equal to 6
// ex: 

// sliding window format
function smallestContiguousSubArray(arr, s){
    let minimumLengthSoFar = Infinity;
    let windowStart = 0, windowSum = 0;
    for(let windowEnd=0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        while(windowSum >= s){
            let currentWindowLength = windowEnd - windowStart + 1
            minimumLengthSoFar = Math.min(minimumLengthSoFar, currentWindowLength )
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    if(minimumLengthSoFar === Infinity){
        return 0;
    }
    return minimumLengthSoFar;
}

console.log(smallestContiguousSubArray([1,3,2,2,4,5], 6))