/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/
function flipUpsideDown(root) {
  //Recursive solution -> O(N) space complexity for stack
  return flipUpsideDownHelper(root, null, null);
  //Optimal Solution is iterative way. O(1) look at IK editorial for details
}
function flipUpsideDownHelper(root, parent, parentRight) {
  if (root === null) return root;
  let currentNodeRight = root.right_ptr;
  let currentNodeLeft = root.left_ptr;
  root.left_ptr = parentRight;
  root.right_ptr = parent;
  if (currentNodeLeft === null) return root;
  return flipUpsideDownHelper(currentNodeLeft, root, currentNodeRight);
}

