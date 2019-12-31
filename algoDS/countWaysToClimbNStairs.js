function countWaysToClimbR(steps, n) {
  function countWaysToClimbHelper(options, n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    let numberOfways = 0;
    for (let i = 0; i < options.length; i++) {
      numberOfways = numberOfways + countWaysToClimbHelper(options, n - options[i]);
    }
    return numberOfways;
  }
  return countWaysToClimbHelper(steps, n);
}

function countWaysToClimbDP(steps, n) {
  let dpTable = new Array(n + 1).fill(0); //Note we need to return nth value. As we start from 0 we need n+1 array size.
  dpTable[0] = 1; //Base case
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < steps.length; j++) {
      if (i - steps[j] > -1) { //Gaurd
        dpTable[i] = dpTable[i] + dpTable[i - steps[j]];
      }
    }
  }
  return dpTable[n];
}
