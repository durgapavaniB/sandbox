/* f(i) = 0 if (i > values.length - 1) //out of bound
  f(i) = Math.max(f(i + 2, sum + f(i)), f(i + 1, sum)) //otherwise
*/
function maxStolenValueR(values) {
  function maxStolenValueRHElper(i) {
    if (i > values.length - 1) return 0;
    return Math.max(values[i] + maxStolenValueRHElper(i + 2), maxStolenValueRHElper(i + 1));
  }
  return maxStolenValueRHElper(0);
}
function maxStolenValueDP(values) {
  let dpTable = new Array(values.length + 2).fill(0);
  for (let i = values.length - 1; i >= 0; i--) {
    dpTable[i] = Math.max(values[i] + dpTable[i + 2], dpTable[i + 1]);
  }
  return dpTable[0];
}