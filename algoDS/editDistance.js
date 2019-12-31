//Edit distance or levenshteinDistance
//Recursion
function levenshteinDistance(strWord1, strWord2) {
  function computeCost(w1, w2, i, j, cost) {
    if (i < 0 && j < 0)
      return cost; //All chars of w1 and w2 are done.
    if (i < 0)
      return cost + j + 1; //Characters in w1 are done, but chars in w2 is still available. insert all chars in w2 in w1
    if (j < 0)
      return cost + i + 1; //Characters in w1 are still there, but chars in w2 exhausted. delete extra characters in w1
    if (w1[i] === w2[j])
      return computeCost(w1, w2, i - 1, j - 1, cost);
    let minVal = Math.min(computeCost(w1, w2, i, j - 1, cost), //insert character in w1. w1 length increased.
      computeCost(w1, w2, i - 1, j - 1, cost), //update
      computeCost(w1, w2, i - 1, j, cost)); //delete character in w1. Ensure to reduce index.
    return minVal + 1;
  }
  return computeCost(strWord1, strWord2, strWord1.length - 1, strWord2.length - 1, 0);
}

//Dynamic Programming
var minDistance = function (strWord1, strWord2) {
  let dpTable = new Array(strWord1.length + 1);
  for (let i = 0; i <= strWord1.length; i++) {
    dpTable[i] = new Array(strWord2.length + 1).fill(0);
  }
  for (let row = 0; row <= strWord1.length; row++) {
    for (let col = 0; col <= strWord2.length; col++) {
      if (row === 0) { //base case 
        //Fill Row 0 -> This is the case where we had one word completed. Other word has characters left.
        dpTable[0][col] = col;
      } else if (col === 0) { //base case 
        //Fill column 0 ->This is the case where we had one word completed. Other word has characters left.
        dpTable[row][0] = row;
      } else if (strWord1[row - 1] === strWord2[col - 1]) {
        dpTable[row][col] = dpTable[row - 1][col - 1];
      } else
        dpTable[row][col] = 1 + Math.min(dpTable[row - 1][col - 1], dpTable[row][col - 1], dpTable[row - 1][col]);
    }
  }
  //console.dir(dpTable);
  return dpTable[strWord1.length][strWord2.length];
};