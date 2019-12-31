/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {

  function findIndexOfMaxValue(nums, i, j) {
    var max = -Infinity, index = -1;
    while (i <= j) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
      i++;
    }
    return index;
  }
  function constructMaximumBinaryTreeHelper(nums, i, j) {
    if (i > j) return null;
    if (i === j) return new TreeNode(nums[i]);
    let maxIndex = findIndexOfMaxValue(nums, i, j);
    let newTreeNode = new TreeNode(nums[maxIndex]);
    newTreeNode.left = constructMaximumBinaryTreeHelper(nums, i, maxIndex - 1);
    newTreeNode.right = constructMaximumBinaryTreeHelper(nums, maxIndex + 1, j);
    return newTreeNode;
  }
  return constructMaximumBinaryTreeHelper(nums, 0, nums.length - 1);
};