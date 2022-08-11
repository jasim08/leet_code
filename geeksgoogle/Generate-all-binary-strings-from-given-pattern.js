/* Generate-all-binary-strings-from-given-pattern.js
Given a string containing of ‘0’, ‘1’ and ‘?’ wildcard characters, generate all binary strings that can be formed by replacing each wildcard character by ‘0’ or ‘1’. 
Example : 
 

Input str = "1??0?101"
Output: 
        10000101
        10001101
        10100101
        10101101
        11000101
        11001101
        11100101
        11101101

*/

/* we store processed strings in all (array)
we see if string as "?", if so, replace it with 0 and 1
and send it back to recursive func until base case is reached
which is no wildcard left */
  

function genBinaryStrings(s, result){
  if(s.includes('?')){
    let s1 = s.replace(/\?/,'0') //only replace once
    let s2 = s.replace(/\?/,'1') //only replace once
    genBinaryStrings(s1, result)
    genBinaryStrings(s2, result)
  }else{
    result.push(s)
  }
  return result;
}
  
// Driver code
console.log(genBinaryStrings("1??0?101", result = []))