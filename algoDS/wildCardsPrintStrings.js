//Strings with wild card '?' -> 0,1
/*
 * Complete the find_all_possibilities function below.
 */
function find_all_possibilities(s) {
  let result = []
  function find_all_possibilities_helper(s, i, stack) {
    if (i === s.length) {
      result.push(stack.join(''));
      return;
    }
    if (s[i] === '?') {
      stack.push('0');
      find_all_possibilities_helper(s, i + 1, stack);
      stack.pop();
      stack.push('1');
      find_all_possibilities_helper(s, i + 1, stack);
      stack.pop();
    } else {
      stack.push(s[i]);
      find_all_possibilities_helper(s, i + 1, stack);
      stack.pop();
    }
  }
  /*
   * Write your code here.
   */
  var stack = [];
  find_all_possibilities_helper(s, 0, stack);
  return result;
}

