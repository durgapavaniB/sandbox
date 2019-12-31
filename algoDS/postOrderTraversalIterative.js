//use strict;
function postorderTraversal(root) { //No recursion two stacks
  //print left node, print right node, print parent node using stack but no recusrion
  var stackL = [], stackR = [], resultStr = '';
  if (root === null) {
    return;
  }
  if (root.left_ptr === null && root.right_ptr === null) {
    console.log(root.val); return;
  }
  stackL.push(root);
  while (stackL.length > 0) {
    let tempL = stackL.pop();
    if (tempL.left_ptr !== null)
      stackL.push(tempL.left_ptr);
    if (tempL.right_ptr !== null)
      stackL.push(tempL.right_ptr);
    stackR.push(tempL);
  }
  while (stackR.length > 0) {
    let tempR = stackR.pop();
    resultStr = resultStr.length > 0 ? resultStr + ' ' + tempR.val : '' + tempR.val;
  }
  console.log(resultStr);
}