/* 
Find all triplets with zero sum
Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

Examples : 

Play Video
Input : arr[] = {0, -1, 2, -3, 1}
Output : (0 -1 1), (2 -3 1)

Explanation : The triplets with zero sum are
0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

Input : arr[] = {1, -2, 1, 0, 5}
Output : 1 -2  1
Explanation : The triplets with zero sum is
1 + -2 + 1 = 0   

*/

/* explanation
targetsum           Right
   |                 |
 [-3,-2,-1, 0, 1, 1, 2]
      |
     Left
     
     while loop (if L < R){
    condition 1 => if L & R == same then Left++
        Left++
     }
    

  targetsum         Right
      |              |
 [-3,-2,-1, 0, 1, 1, 2]
         |
       Left


*/

function tripletsToZero(arr){
    
arr.sort((a,b)=>a-b)
const triplets = [];

for(let i=0; i < arr.length;i++){
let targetSum = -arr[i];

if(i > 0  && arr[i] === arr[i-1]) { 
    // conditon for avioid duplicate, if next element is also previous number then continue to next loop
continue;
}
searchPair(arr, targetSum, i+1, triplets);

}
return triplets;
}

function searchPair(arr, targetSum, leftPointer,triplets){
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer){

        const currentSum = arr[leftPointer] + arr[rightPointer]
        if(currentSum === targetSum){
            triplets.push([-targetSum, arr[leftPointer],arr[rightPointer]]);
            leftPointer++;
            rightPointer--;

            while(leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]){
                leftPointer++;
            }
            while(leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]){
                rightPointer--;
            }
        }else if(currentSum < targetSum){
            leftPointer++;
        }else if(currentSum > targetSum){
            rightPointer--;
        }


    }
 


}

// testcase
console.log(tripletsToZero([-1,0,1,2,-1,1,-2]))
console.log(tripletsToZero([-5,-2,-1,-2,3]))