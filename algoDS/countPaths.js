//Given two grid with size mXn m-rows and n-columns, CountPaths from 0,0 to m,n. 
//Note there are only two options, go right or go down.
function countPaths(grid) {
  let m = grid.length; //row size
  let n = grid[0].length;//column size

  function countPathsHelper(grid, row, col) {
    //BASE CASE
    if (row === m - 1 && col === n - 1) //Last cell of the grid, return 0
      return 1;
    //GAURDS 
    if (row === m - 1) return 0;
    if (col === n - 1) return 0;
    downPaths = countPaths(grid, row + 1, col); //go down
    rightPaths = countPaths(grid, col, row + 1); //go right
    return downPaths + rightPaths;
  }

  function countPathsDP(grid) {
    var dpTable = [];
    for (let rows = m; rows > 0; rows--) {
      for (let cols = n; cols > 0; cols--) {

      }
    }
  }
  return countPathsHelper(grid, 0, 0);
}
let paths = countPaths(grid);



