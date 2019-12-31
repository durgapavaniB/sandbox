//This uses DFS, so space complexity for stack will be O(logn) for balanced binary tree. For Skewed tree, it will be O(n).
//Run time complexity would be O(n) in worst case because we have to visit every element.

function getPathWithMatchingSum(root, sum) {
  let path = [];
  function getPathWithMatchingSumHelper(root, remainingVal) {
    if (root === null) return;
    if (root.left === null && root.right === null) { //Leaf node
      if (remainingVal === root.val) { //Found leaf node with leftover sum.
        path.push(root.val);
        return true;
      }
      //Havent Found. Wrong path
      return false;
    }
    if (getPathWithMatchingSumHelper(root.left, root.val - remainingVal)) {//Found left tree with path
      //Add my self to the path and return true;
      path.push(root.val);
      return true;
    }
    if (getPathWithMatchingSumHelper(root.right, root.val - remainingVal)) {//Found right tree with path
      //Add my self to the path and return true;
      path.push(root.val);
      return true;
    }
  }
  getPathWithMatchingSumHelper(root, sum);
}

//Extensions to above problem
    //Find All paths
    //Return true if atleast one path
