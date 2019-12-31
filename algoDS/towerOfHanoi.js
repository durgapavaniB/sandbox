/*
* Complete the 'tower_of_hanoi' function below.
*
* The function accepts INTEGER as parameter.
* Return 2D INTEGER ARRAY.
*/
function tower_of_hanoi(n) {
  var result = [], s = 1, a = 2, d = 3;
  function towerOfHanoiHelper(n, s, a, d) {
    if (n === 1) { //only one disk left, move from s->d
      result.push([s, d]);
      return;
    }
    towerOfHanoiHelper(n - 1, s, d, a); //Move n-1 disks to auxilary using destinations as auxilary
    result.push([s, d]); //only one left in s. Move from s->d 
    towerOfHanoiHelper(n - 1, a, s, d); //Now move remaining disks from auxilart to destination using src as auxilary
  }
  towerOfHanoiHelper(n, s, a, d);
  return result;
}