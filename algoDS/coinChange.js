function getMinDenominationsR(A, denomiations) {
  function getMinDenominationsRHelper(A, denomiations) {
    if (A === 0) return 0;
    //Base case or valid case

    //Gaurd or invalid case
    if (A < 0) return Infinity;

    var minDenominations = Infinity;
    for (let i = 0; i < denomiations.length; i++) {
      //console.log(A);
      minDenominations = Math.min(minDenominations, getMinDenominationsRHelper(A - denomiations[i], denomiations));
    }
    return minDenominations + 1;
  }
  return getMinDenominationsRHelper(A, denomiations, Infinity);
}

/* DP
* Complexity, 
* Time O(A*k)
* Space O(A+1) =~ O(A)
*/

function getMinDenominationsDP(A, denomiations) {
  let dpTable = new Array(A + 1).fill(Infinity);
  //Base case
  dpTable[0] = 0;
  for (let i = 1; i < dpTable.length; i++) {

    for (let j = 0; j < denomiations.length; j++) {
      if (i - denomiations[j] >= 0) {
        dpTable[i] = Math.min(dpTable[i], dpTable[i - denomiations[j]]);
      }
    }
    if (dpTable[i] !== Infinity) //Valid case
      dpTable[i] = dpTable[i] + 1;
  }
  return dpTable[A];
}

var output = getMinDenominationsR(10, [5, 4]);
console.log('For input 10, {5,4}, min denominations using R are : ' + output);
var output = getMinDenominationsDP(10, [5, 4]);
console.log('For input 10, {5,4}, min denominations using DP are : ' + output);
var output = getMinDenominationsR(8, [2, 5, 3]);
console.log('For input 8, {2, 5, 3}, min denominations using R are : ' + output);
var output = getMinDenominationsDP(8, [2, 5, 3]);
console.log('For input 8, {2, 5, 3}, min denominations using DP are : ' + output);
var output = getMinDenominationsR(8, [2, 9]);
console.log('For input 8, {2, 9}, min denominations using R are : ' + output);
var output = getMinDenominationsDP(8, [2, 9]);
console.log('For input 8, {2, 9}, min denominations using DP are : ' + output);
