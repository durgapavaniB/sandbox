function nQueens(N) {
  let results = [];
  function isQPositionValid(positions, row, col) {
    for (let i = 0; i < positions.length; i++) {
      let currQ = positions[i];
      if (currQ.row === row || currQ.col === col) return false;
      /*if(row-1 === currQ.row && col-1 === currQ.col
          || row+1  === currQ.row && col-1 === currQ.col
          || row-1  === currQ.row && col+1 === currQ.col
          ||row+1 === currQ.row && col+1 === currQ.col) return false;*/
      if (currQ.row + currQ.col === row + col) return false; //on side of the diagnol
      if (currQ.row - currQ.col === row - col) return false; //on side of the diagnol
    }
    return true;
  }
  function printBoard(positions) {
    let board = new Array(N); //array of strings
    for (let i = 0; i < positions.length; i++) {
      let str = new Array(N).fill('-');
      let currQ = positions[i];
      str[currQ.col] = 'q';
      str = str.join('');
      board[currQ.row] = str;
    }
    results.push(board);
  }
  function nQueensHelper(positions, row) {
    if (row === N) {
      printBoard(positions);
      return true;
    }
    let isValid = false;
    for (let col = 0; col < N; col++) {
      if (isQPositionValid(positions, row, col)) {
        positions.push({ row: row, col: col });
        isValid = nQueensHelper(positions, row + 1);
        positions.pop();
      }
    }
    return isValid ? true : false;
  }
  nQueensHelper([], 0);
  return results;
}
let results = nQueens(4);
console.log(results);