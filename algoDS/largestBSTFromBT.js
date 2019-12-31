/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/
class infoNode {
  constructor(isBST, size, min, max) {
    this.isBST = isBST;
    this.min = min !== undefined ? min : Number.MIN_SAFE_INTEGER,
      this.max = max !== undefined ? max : Number.MAX_SAFE_INTEGER,
      this.size = size
  }
}
function findLargestBST(root) {
  let bstInfo = largestBSTHelper(root);
  return bstInfo.size;
}
function largestBSTHelper(root) {
  if (root === null)
    return new infoNode(true, 0);

  if (root.left_ptr === null && root.right_ptr === null) { // Leaf node is BST by default and size = 1
    return new infoNode(true, 1, root.val, root.val);
  }

  let leftBSTInfo = largestBSTHelper(root.left_ptr);
  let rightBSTInfo = largestBSTHelper(root.right_ptr);

  //if left node max is infinity due to null node skip comparision. 
  //if right node min is infinity due to null node skip comparision. 
  let currentNodeValInRange = (leftBSTInfo.max === Number.MAX_SAFE_INTEGER || leftBSTInfo.max <= root.val) && (rightBSTInfo.min === Number.MIN_SAFE_INTEGER || root.val <= rightBSTInfo.min);
  let isCurrentBST = leftBSTInfo.isBST && rightBSTInfo.isBST && currentNodeValInRange;

  return {
    min: leftBSTInfo.min == Number.MIN_SAFE_INTEGER ? root.val : leftBSTInfo.min, //if left min is -Infinity due to a null node, send current node val as min. 
    max: rightBSTInfo.max == Number.MAX_SAFE_INTEGER ? root.val : rightBSTInfo.max,//if right max is Infinity due to a null node, send current node val as max. 
    isBST: isCurrentBST,
    size: isCurrentBST ? (1 + leftBSTInfo.size + rightBSTInfo.size) : Math.max(leftBSTInfo.size, rightBSTInfo.size)
  };
}

