/** https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] == 1) return -1;
  let q = [], size = 0, level = 0, visited = {};

  function getValidNeighbors(currCell) {
    let validNeighbors = [];
    let validMoves = [[0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]];
    for (let k = 0; k < validMoves.length; k++) {
      let rowI = currCell[0] + validMoves[k][0];
      let colI = currCell[1] + validMoves[k][1];
      if (rowI >= 0 && rowI <= grid.length - 1
        && colI >= 0 && colI <= grid.length - 1
        && grid[rowI][colI] == 0) {
        validNeighbors.push([rowI, colI]);
      }
    }
    return validNeighbors;
  }
  q.push([0, 0]);
  while (q.length > 0) {
    size = q.length;
    level++;
    for (let i = 0; i < size; i++) {
      let currCell = q.shift();
      if (currCell[0] === grid.length - 1 && currCell[1] === grid.length - 1) {
        //Reached end cell;
        return level;
      }
      let neighbors = getValidNeighbors(currCell);
      neighbors.forEach(function (neighbor) {
        if (visited[neighbor] == undefined) {
          q.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }

  return -1;
};