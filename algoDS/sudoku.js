function sudoku(board) {
  function getUnassignedCell(board) {
    let cell;
    for (let i = 0; i < board.length && cell === undefined; i++) {
      for (let j = 0; j < board.length && cell === undefined; j++) {
        if (board[i][j] === '.') {
          //found cell. 
          cell = { row: i, col: j };
          break;
        }
      }
    }
    return cell;
  }
  function findConflicts(board, row, col, value) {
    let i = 0, j = 0, foundConflicts = false;
    while (i < board.length) {//for given col check all rows for conflict
      if (board[i][col] === value) {
        foundConflicts = true;
        break;
      }
      i++;
    }
    if (foundConflicts) return foundConflicts;
    while (j < board.length) {//for given col check all rows for conflict
      if (board[row][j] === value) {
        foundConflicts = true;
        break;
      }
      j++;
    }
    return foundConflicts;
  }
  function sudokuHelper(board) {
    //find unassigned element on board -> cell(row, col).
    let cell = getUnassignedCell(board);
    //No unassigned element - YAY complete
    if (cell === undefined) return true;
    for (let i = 1; i <= 9; i++) {
      if (!findConflicts(board, cell.row, cell.col, i)) {
        board[cell.row][cell.col] = i;
        //For every i, check which i doesnt have conflicts. Insert this i to cell.
        //with this cell value continue filling sudoku board recursively. If board fails at any time.this cell value have to be reverted.
        let boardIsValid = sudokuHelper(board);
        //if board is not valid, reset to undefined in cell.
        if (!boardIsValid)
          board[cell] = '.';
      }
    }
  }
  function testBoard(board) {
    if (!testSize(board)) return false;
    //if (!testRows(board)) return false;
    //if (!testCols(board)) return false;
    //if (!testRegions(board)) return false;
    return true;
  }
  function testSize(board) {
    if (board.length != 9) return false;
    for (let i = 0; i < board.length; i++) {
      if (board[i].length != 9) return false;
    }
    return true;
  }
  if (testBoard(board))
    sudokuHelper(board);
}




function testSudoku() {
  // correct solution
  let validOutput = [
    [8, 3, 5, 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, 5, 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 8],
    [5, 6, 9, 1, 3, 4, 7, 8, 2],
    [1, 2, 3, 6, 7, 8, 5, 4, 9],
    [7, 4, 8, 5, 2, 9, 1, 6, 3],
    [6, 5, 2, 7, 8, 1, 3, 9, 4],
    [9, 8, 1, 3, 4, 5, 2, 7, 6],
    [3, 7, 4, 9, 6, 2, 8, 1, 5]
  ];
  let test = [
    [8, 3, '.', 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, '.', 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 8],
    [5, 6, 9, 1, 3, 4, 7, 8, 2],
    [1, 2, '.', 6, 7, 8, '.', 4, 9],
    [7, 4, 8, 5, '.', 9, 1, 6, 3],
    [6, 5, 2, 7, 8, 1, 3, 9, 4],
    [9, '.', 1, 3, 4, 5, 2, 7, 6],
    [3, 7, 4, 9, 6, 2, 8, 1, '.']
  ];
  sudoku(test);
  console.log('Result is : ', test);
  console.log('Expected result is : ', validOutput);
}

testSudoku();