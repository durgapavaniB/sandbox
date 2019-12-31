function numPhoneNumbers(startdigit, phonenumberlength) {
  let knightMoveMap = {
    0: [4, 6],
    1: [8, 6],
    2: [7, 9],
    3: [4, 8],
    4: [3, 9, 0],
    5: [],
    6: [0, 7, 1],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4]
  };
  let dpTable = new Array(phonenumberlength + 1);
  for (let i = 0; i < dpTable.length; i++) {
    dpTable[i] = new Array(10).fill(0);
  }
  for (let i = 0; i < dpTable[0].length; i++) {
    dpTable[1][i] = 1;
  }
  for (let row = 2; row < dpTable.length; row++) {
    for (let col = 0; col < 10; col++) {
      //col would be the digit for which we need to rely on neighbors.
      for (let k = 0; k < knightMoveMap[col].length; k++) {
        let neighborDigit = knightMoveMap[col][k];
        dpTable[row][col] = dpTable[row][col] + dpTable[row - 1][neighborDigit];
      }
    }
  }
  return dpTable[phonenumberlength][startdigit];
}
