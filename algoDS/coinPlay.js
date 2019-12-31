/*Recurrence relationship
  F(i, j) ==> represents the maximum value the user can collect from i'th coin to j'th coin.
    F(i, j) = Max(Vi + min(F(i + 2, j), F(i + 1, j - 1)), Vj + min(F(i + 1, j - 1), F(i, j - 2)))

  Base Cases
  F(i, j) = Vi      If j == i
  F(i, j) = max(Vi, Vj) If j == i + 1
*/

function maxWinR(v) {
  function maxWinRHelper(v, i, j) {
    if (i === j) return v[i];
    if (j === i + 1) return Math.max(v[i], v[j]);
    if (i > j || j < i) return Infinity;
    let val1 = v[i] + Math.min(maxWinRHelper(v, i + 2, j), maxWinRHelper(v, i + 1, j - 1));
    let val2 = v[j] + Math.min(maxWinRHelper(v, i + 1, j - 1), maxWinRHelper(v, i, j - 2));
    return Math.max(val1, val2);
  }
  return maxWinRHelper(v, 0, v.length - 1);
}

function maxWinDP(v) {
  let dpTable = new Array(v.length);
  for (let i = 0; i < dpTable.length; i++) {
    dpTable[i] = new Array(v.length).fill(0);
  }
  for (let i = v.length - 1; i >= 0; i--) {
    for (let j = i; j <= v.length - 1; j++) { //Note j starts at i and increments until length of 
      if (i === j) dpTable[i][j] = v[i];
      else if (j === i + 1) dpTable[i][j] = Math.max(v[i], v[j]);
      else {
        let val1 = v[i] + Math.min(dpTable[i + 2][j], dpTable[i + 1][j - 1]);
        let val2 = v[j] + Math.min(dpTable[i + 1][j - 1], dpTable[i][j - 2]);
        dpTable[i][j] = Math.max(val1, val2);
      }
    }
  }
  return dpTable[0][v.length - 1];
}