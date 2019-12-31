/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  pruneBT(root);
  return root;
};
function pruneBT(root) {
  if (root === null) return false;//does it have 1.
  let leftHas1 = pruneBT(root.left);
  let rightHas1 = pruneBT(root.right);
  if (!leftHas1)
    root.left = null;
  if (!rightHas1)
    root.right = null;
  if (leftHas1 || rightHas1) return true;
  else
    return root.val === 1;
}