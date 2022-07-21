/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    
    let unpair = [];
    let count = 0;

    for(let i= 0; i < s.length; i++){
        let idx = unpair.indexOf(s[i])
         if(idx !== -1){
            unpair.splice(idx, 1);
            count += 2
         }else{
            unpair.push(s[i])
         }
    }

    return count + 1;

};

console.log()