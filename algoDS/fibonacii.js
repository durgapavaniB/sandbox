let map = {};
function fibonacii(i) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  if (map.i !== undefined) return i;
  map.i = fibonacii(i - 1) + fibonacii(i - 2);
  return map.i;
}
fibonacii(6);