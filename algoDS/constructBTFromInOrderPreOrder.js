/*
 * Complete the 'constructBinaryTree' function below.
 *
 * The function accepts INTEGER_ARRAY inorder and preorder as parameter and returns Root pointer of constructed binary tree.
 * Definition for Binary tree.
 * function TreeNode(value){
 *     this.value = value
 *     this.left = null
 *     this.right = null
 * }
 */
function findPreOrderVal(preorder, start, end) {
  if (start === end) return start;
  let mid = start + end / 2;
  preorder
}
function findNode(inorder, l, r, preorder) {
  if (l < r) return null;
  if (l === r) return new TreeNode(inorder[l]);
  let currI = inorder.findIndex(preorder[preorderIndex]);
  let root = new TreeNode(inorder[currI]);
  preorderIndex++;
  root.left = findNode(inorder, l, mid - 1);
  preorderIndex++;
  root.right = findNode(inorder, r, mid + 1);
  return root;
}

function constructBinaryTree(inorder, preorder) {
  // Write your code here
  var preorderIndex = preorder.length - 1;
  return findNode(inorder, 0, inorder.length - 1, preorder);
}

