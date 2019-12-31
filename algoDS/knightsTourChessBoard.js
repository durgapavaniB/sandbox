function find_minimum_number_of_moves(rows, cols, start_row, start_col, end_row, end_col) {
  // Write your code here.
  if (start_row === end_row && start_col === end_col) return 0;
  let visited = {}; //Maintian cell's visied already. For visited, Key is  'rowI:colI', value is true; If not defined not visited.
  let moveDirection = [[1, 2], [2, 1], [2, -1], [1, -2], [-2, -1], [-1, -2], [-2, 1], [-1, 2]];
  let queue = [];
  let level = -1;
  queue.push([start_row, start_col]);
  while (queue.length > 0) {
    let size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      let currVertex = queue.shift();
      //check if currVertex is the destination vertex.
      if (currVertex[0] === end_row && currVertex[1] === end_col) {
        return level;
      }
      for (let i = 0; i < 8; i++) {
        let currNeighRow = currVertex[0] + moveDirection[i][0];
        let currNeighCol = currVertex[1] + moveDirection[i][1];
        let key = `${currNeighRow}:${currNeighCol}`;
        if (currNeighRow >= 0 && currNeighRow < rows && currNeighCol >= 0 && currNeighCol < cols && visited[key] === undefined) {
          queue.push([currNeighRow, currNeighCol]);
          visited[key] = true;
        }
      }
    }
  }
  return -1;
}

//test - 5,5,1,1,4,4
function test() {
  //return find_minimum_number_of_moves(5,5,1,1,4,4);
  return find_minimum_number_of_moves(5, 5, 0, 0, 4, 1);
}
console.log(test());