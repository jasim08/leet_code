// Sliding window - input [1, 2, 3, 4, 5] k =3
// find average of contiguos subarray of size k 
// ex: (1+2+3)/3 , (2+3+4)/3 , (3,4,5)/3  => ans = [2,3,4]


// sliding window format
function find_sum_of_Average(arr, k){
    let averages = []
    let windowStart = 0, windowSum = 0;
    for(let windowEnd=0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        if(windowEnd >= k - 1){
            averages.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return averages;
}

console.log(find_sum_of_Average([1,2,3,4,5], 3))