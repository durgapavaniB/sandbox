/*
 * Complete the function below.
 * arr could have negative values
 */
function check_if_sum_possible(arr, k) {
  let stack = [];
  function check_if_sum_possible_helper(arr, i, remainingSum) {
    //check stack length to avoid empty set to be considered as match because the original k could be 0 and remainingSum of null set will be 0. 
    if (remainingSum === 0 && stack.length > 0) return 1;
    if (i === arr.length) return 0;
    //Exclusion
    if (check_if_sum_possible_helper(arr, i + 1, remainingSum))
      return true;
    else {
      stack.push(arr[i]);
      //Inclusion
      if (check_if_sum_possible_helper(arr, i + 1, remainingSum - arr[i])) {
        return true;
      }
      stack.pop(arr[i]);
    }
  }
  return check_if_sum_possible_helper(arr, 0, k);
}

