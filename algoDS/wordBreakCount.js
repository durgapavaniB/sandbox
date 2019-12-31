function wordBreakCount(dictionary, txt) {
  // Write your code here
  let count = 0;
  function wordBreakCountHelper(start, end) {
    if (start > end) return;
    let subStr = txt.substring(start, end + 1); //substring works with start index(included) and end index(excluded). so add 1 to include character at end index.
    if (dictionary.indexOf(subStr) > -1) { //Found in dictionary
      count++;
      wordBreakCountHelper(end + 1, end + 1);
    } else { //Not found in dictionary. Add one more character and continue.
      wordBreakCountHelper(start, end + 1);
    }
  }
  wordBreakCountHelper(0, 0); //start with first character;
  return count;
}