
/*
 * Complete the function below.
 */
function generate_palindromic_decompositions(s) {
  let stack = [];
  function isPalindrome(str) {
    let i = 0, j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++; j--;
    }
    return true;
  }
  function printStack(stack) {
    var str = '';
    for (let i = 0; i < stack.length; i++) {
      str = str.length < 1 ? str + stack[i] : str + '|' + stack[i];
    }
    console.log(str);
  }
  function decompositionHelper(remainingStr, stack) {
    let length = remainingStr.length;
    if (length === 0) {
      printStack(stack);
      return;
    }
    for (let i = 0; i < remainingStr.length; i++) {
      let decomposition = remainingStr.substring(0, i + 1);// substring javascript will excluse destination index element
      if (isPalindrome(decomposition)) { //pursue only if palindrome
        stack.push(decomposition);
        let newStr = remainingStr.substring(i + 1, length); //length is already 1 more than last index, so this should take care of substring destimation to use up to last character.
        decompositionHelper(newStr, stack);
        stack.pop();
      }
    }
  }
  decompositionHelper(s, stack);
}
console.log(generate_palindromic_decompositions('abba'));
console.log(generate_palindromic_decompositions('abracadabra'));
