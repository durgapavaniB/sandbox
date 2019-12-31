
//Input- "cdBnC52c" output - "BCcdnc52"

//Solution is still not working. According to this solution original order doesnt maintain. 
function rearrangeString(inputStr) {
  let output = inputStr.split('');
  function swap(xI, yI) {
    let temp = output[xI];
    output[xI] = output[yI];
    output[yI] = temp;
  }
  let capI = 0, //capI should point to first non Capital letter from left side
    numI = inputStr.length - 1, //numI should point to first non integer number from right;
    readI = 0; //readI should point to curr element being processed
  while (readI <= numI) {
    if (/[A-Z]/.test(output[readI])) {
      swap(readI, capI);
      readI++;
      capI++;
    } else if (/[0-9]/.test(output[readI])) {
      swap(readI, numI);
      numI--;
    } else if (/[a-z]/.test(output[readI])) {
      readI++;
    } else {
      console.log('Invalid character');
      break;
    }
  }
  return output.join('');
}

const outputStr = rearrangeString('cdBnC52c');
console.log(outputStr);