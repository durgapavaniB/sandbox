//Step 1. Computer inoder of tree1, and tree2. This will give two sorted array's
//Step 2. Merge two sorted array's like a merge sort
//Step 3. Build a balance BST from a sorted array
//rootOfNewBST = mergeTwoBSTs(root1, root2);
import Node from '../../BST/bstNode'
function inOrder(root, arr = []) {
  if (root === null) return;
  inOrder(root.left, arr);
  arr.push(root.key);
  inOrder(root.right, arr);
}
function mergeTwoSortedArrays(arr1, arr2) {
  var mergedArray = [], p1 = 0, p2 = 0;
  while (p1 <= arr1.length - 1 && p2 <= arr2.length - 1) {
    if (arr1[p1] < arr2[p2]) {
      mergedArray.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      mergedArray.push(arr2[p2]);
      p2++;
    } else {
      mergedArray.push(arr1[p1]);
      p1++;
      mergedArray.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 <= arr1.length - 1) {
    while (p1 <= arr1.length - 1) {
      mergedArray.push(arr1[p1]);
      p1++;
    }
  }
  if (p2 <= arr2.length - 1) {
    while (p2 <= arr2.length - 1) {
      mergedArray.push(arr2[p2]);
      p2++;
    }
  }
  return mergedArray;
}
function constructBalancedBSTFromArray(sortedData, l, r) {
  if (l > r) return null;
  if (l === r) return new Node(sortedData[l]);
  let mid = Math.ceil((l + r) / 2);
  let newRootNode = new Node(sortedData[mid]);
  newRootNode.left = constructBalancedBSTFromArray(sortedData, l, mid - 1);
  newRootNode.right = constructBalancedBSTFromArray(sortedData, mid + 1, r);
  return newRootNode;// this will return root of tree
}
function mergeTwoBSTs(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  let arr1 = [], arr2 = [];
  inOrder(root1, arr1);
  inOrder(root2, arr2);
  let sortedData = mergeTwoSortedArrays(arr1, arr2);
  var root = constructBalancedBSTFromArray(sortedData, 0, sortedData.length - 1);
  return root;
}




