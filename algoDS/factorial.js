function fact(n) {
  if (n === 1 || n === 0) return 1;
  return fact(n) * fact(n - 1);
}

//DP
function factDP(n) {
  let dpTable = [], result = 1;
  dpTable[0] = 1;
  dpTable[1] = 1;
  for (i = 2; i < (n.length - 2); i++) {
    dpTable[i] = dpTable[i - 1] * dpTable[i - 2];
  }
}