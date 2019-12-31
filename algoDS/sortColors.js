/*Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]*/

function sortColors(colors) {
  function swap(xI, yI) {
    let temp = colors[xI];
    colors[xI] = colors[yI];
    colors[yI] = temp;
  }
  let zerop = 0, twop = colors.length - 1;
  let readp = 0;
  while (readp <= twop) {
    //read pointer has 0.
    if (colors[readp] === 0) { //increment read pointer.
      swap(readp, zerop);
      zerop++;
      readp++;
    } else if (colors[readp] === 2) { //dont increment read pointer.
      swap(readp, twop);
      twop--;
    } else readp++; //increment read pointer.
  }
  return colors;
}
//let result = sortColors([2,0,2,1,1,0]);
let result = sortColors([2, 0, 1]);
console.log(result);