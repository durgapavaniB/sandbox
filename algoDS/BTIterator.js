/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.root = root;
  this.stack = [];
  this.iterateLeftHelper = function (currNode) {
    while (currNode !== null) {
      this.stack.push(currNode);
      currNode = currNode.left;
    }
  };
  this.iterateLeftHelper(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (!this.hasNext()) return null;
  let curr = this.stack.pop();
  //console.log(' This is next : ' + curr.val);
  if (curr.right !== null) {
    this.iterateLeftHelper(curr.right);
  }
  return curr.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */