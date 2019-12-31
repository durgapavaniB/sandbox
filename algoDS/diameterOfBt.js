/** https://leetcode.com/problems/diameter-of-binary-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  return diameterOfBinaryTreeHelper(root).maxDiam;
};

function diameterOfBinaryTreeHelper(root) {
  if (root === null) return { maxPath: 0, maxDiam: 0 };
  let leftData = diameterOfBinaryTreeHelper(root.left);
  let rightData = diameterOfBinaryTreeHelper(root.right);
  rootDiam = leftData.maxPath + rightData.maxPath;
  return {
    maxPath: Math.max(leftData.maxPath, rightData.maxPath) + 1,
    maxDiam: Math.max(rootDiam, leftData.maxDiam, rightData.maxDiam)
  }
}