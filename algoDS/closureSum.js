function closureSum(a) {
  return function (b) {
    if (b) return closureSum(a + b);
    else return a; //base consition for recursion
  }
}
let sum = closureSum(10)(20)(30)(40)();
console.log(sum);