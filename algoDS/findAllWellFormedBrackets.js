/*
 * Complete the function below.
 */
function find_all_well_formed_brackets(n) {
  let result = [];
  function find_all_well_formed_brackets_helper(validPrefix, openings, closing) {
    if (openings + closing === 2 * n) { //base case
      result.push(validPrefix);
      return;
    }
    //gaurds
    if (closing > openings) return false;
    if (openings < n)
      find_all_well_formed_brackets_helper(validPrefix + '(', openings + 1, closing);
    if (closing < n)
      find_all_well_formed_brackets_helper(validPrefix + ')', openings, closing + 1);
  }
  find_all_well_formed_brackets_helper('', 0, 0);
  return result;
}

