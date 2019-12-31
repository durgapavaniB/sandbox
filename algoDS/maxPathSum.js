/* Dynamic programming  
* Complexity -> We required grid with (rows+1, cols+1) size and we need two for loops to iterate the grid.
* Space O(n*m)
* Time is O(m*n)
*/
function maxPathSumDP(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  //Setup DP table
  let dpTable = new Array(rows + 1);
  for (let i = 0; i <= cols; i++) {
    dpTable[i] = new Array(cols + 1).fill(-Infinity);
  }
  //Base case
  dpTable[i][j] = grid[rows - 1][cols - 1];

  //Fill DP Table
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      dpTable[i][j] = Math.max(dpTable[i + 1][j], dpTable[i][j + 1]) + grid[i][j];
    }
  }
  return dpTable[0][0];
}
/* Recursion 
* Complexity -> tree with tow choices k =2. max height of the tree is (m+n). 
* Space O(n+m)
* Time is O(2^(m+n))
*/
function maxPathSumR(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  function maxPathSumHelper(grid, i, j) {
    if (i === rows - 1 && j === cols - 1) { //Base case
      return grid[i][j];
    }
    //gaurds
    if (i > rows - 1 || j > cols - 1) {
      return -Infinity;
    }
    return Math.max(maxPathSumHelper(grid, i + 1, j), maxPathSumHelper(grid, i, j + 1)) + grid[i][j];
  }
  return maxPathSumHelper(grid, 0, 0);
}
//TEST CASES
let sum = maxPathSumR([[2, 5], [1, 2]]); //9
console.log(sum);
sum = maxPathSumDP([[2, 5], [1, 2]]); //9
console.log(sum);
sum = maxPathSumR([[-2, -5], [-1, -2]]); //-5
console.log(sum);
sum = maxPathSumDP([[-2, -5], [-1, -2]]); //-5
console.log(sum);
sum = maxPathSumR([[-2, -5], [1, 2]]); //1
console.log(sum);
sum = maxPathSumDP([[-2, -5], [1, 2]]); //1
console.log(sum);
sum = maxPathSumR([[10, -50, 30], [-2, -5, -5], [0, 0, 0]]); //8
console.log(sum);
sum = maxPathSumDP([[10, -50, 30], [-2, -5, -5], [0, 0, 0]]); //8
console.log(sum);
