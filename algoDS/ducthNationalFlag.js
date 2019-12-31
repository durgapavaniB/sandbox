/*You are given n balls. Each of these balls are of one the three colors: Red, Green and Blue. They are arranged randomly in a line. Your task is to rearrange them such that all balls of the same color are together and their collective color groups are in this order: Red balls first, Green balls next and Blue balls last.
*/
function dutch_flag_sort(balls) {
  if (!balls.length)
    return balls;
  function swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }
  var currI = 0, writeRedPointerI = 0, writeBluePointerI = balls.length - 1;
  while (currI <= writeBluePointerI) {
    if (balls[currI] === 'B') {
      swap(balls, currI, writeBluePointerI);
      writeBluePointerI--;
    } else if (balls[currI] === 'R') {
      swap(balls, writeRedPointerI, currI);
      writeRedPointerI++;
      currI++;
    } else {
      currI++;
    }

  }
  return balls;
}
balls = ['G', 'B', 'G', 'G', 'R', 'B', 'R', 'G'];
console.log(dutch_flag_sort(balls));
