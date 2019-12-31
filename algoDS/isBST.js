/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/
/*
 * Complete the function below.
 */

function isBST(root) {
  function isBSTHelper(root, min, max) {
    if (root === null) return true;
    //1. my value should be with in range provided by my parent.
    //2. my left tree should be a BST,
    //3. my right tree should be a BST
    if (min > root.val || root.val > max) //Some BST implementation could have duplicates.
      return false;
    return isBSTHelper(root.left_ptr, min, root.val) && isBSTHelper(root.right_ptr, root.val, max);
  }
  return isBSTHelper(root, -Infinity, Infinity);
}

