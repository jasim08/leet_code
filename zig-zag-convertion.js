/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/


/*   0 1 2 3 4 5 6
  0  P     I    N
  1  A   L S  I G
  2  Y A   H R
  3  P     I
  =>  0 1 2 3
  =>  
  row = 4
  0 => 0 + 6 + 6 => (row - 1) * 2
  1,2 => (row - 1 ) * 2 - (2 * r)
      => 4 -1 * 2  - 2 * 1
      => 3 *2 - 2
      => 4 
      =>> (4 - 1) * 2 - (2 *2)
      =>> 3 * 2 - 4
      =>> 2
*/

  
      function convert(s, numRows) {
      if (numRows === 1 || s.length < numRows) {
        return s;
      }
      let rows = [];
      let currentRow = 0;
      let reverse = false;
      for (let i = 0; i < numRows; i++) {
        rows[i] = [];
      }
    console.log(rows)
      for (let i = 0; i < s.length; i++) {
        rows[currentRow].push(s[i]);
        if (reverse === false) {
          currentRow++;
        } else {
          currentRow--;
        }
    
        if (currentRow === numRows - 1 || currentRow === 0) {
          reverse = !reverse;
        }
      }
      let result = ""
      rows.forEach(el =>{
        result += el.join('')
      })
return result
};

console.log(convert("PAYPALISHIRING", 4))