import TreeNode from "../../TreeNode";
import Queue from "../../../dataStrcutures/queue/queue";
//For cloning a tree, we have to travese every node of the input tree. We could use DFS or BFS.

//Solution 1 DFS-> post order 
function cloneTreeDFS(root) {
  if (root === null) return null;
  let clonedNode = new TreeNode(root.val);
  clonedNode.left_ptr = cloneTreeDFS(root.left_ptr);
  clonedNode.right_ptr = cloneTreeDFS(root.right_ptr);
  return clonedNode;
}

//Solution 2. BFS -> Need two queues. One for original tree. one for new tree. With one queue, it doesnt work after level 1.
function cloneTreeBFS(root) {
  if (root === null) return;
  let queue = new Queue(),
    clonedQueue = new Queue();

  queue.enQueue(root); //Push root element to queue

  let clonedTreeNode = new TreeNode(root.val);
  clonedQueue.enQueue(clonedTreeNode);

  let clonedTreeRoot = clonedTreeNode; //Keep Reference to new tree root

  while (!queue.isEmpty()) {
    let currentNode = queue.deQueue();
    let clonedTreeNode = clonedQueue.deQueue();
    if (currentNode.left_ptr) {
      queue.enQueue(currentNode.left_ptr);
      clonedTreeNode.left_ptr = new TreeNode(currentNode.left_ptr.val);
      clonedQueue.enQueue(clonedTreeNode.left_ptr);
    }
    if (currentNode.right_ptr) {
      queue.enQueue(currentNode.right_ptr);
      clonedTreeNode.right_ptr = new TreeNode(currentNode.right_ptr.val);
      clonedQueue.enQueue(clonedTreeNode.right_ptr);
    }
  }
  return clonedTreeRoot;
}
function cloneTree(root) {
  return cloneTreeBFS(root);
}
