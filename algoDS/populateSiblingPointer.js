import TreeNode from "./TreeNode";
import Queue from "./queue"
class QNode {
  constructor(node, level) {
    this.node = node;
    if (this.node)
      this.node.nextRight = null;
    this.level = level;
  }
}
//Use BFS, Queue, Instead of just tree node, create new QNode which we use while traversing in queue, which is treenode and an additional extra param level.
//Note now tree node has extra param called nextRight.
function populateSiblingPointers(root) {
  if (root === null) return;
  let qNode = new QNode(root, 0),
    previousQNode,
    queue = new Queue();
  queue.enQueue(qNode);
  while (!queue.isEmpty()) {
    var currentQNode = queue.deQueue();
    if (previousQNode) {
      if (previousQNode.level === currentQNode.level) {
        previousQNode.node.nextRight = currentQNode.node;
      }
    }
    if (currentQNode.node.left_ptr) {
      let leftQNode = new QNode(currentQNode.node.left_ptr, currentQNode.level + 1);
      queue.enQueue(leftQNode);
    }
    if (currentQNode.node.right_ptr) {
      let rightQNode = new QNode(currentQNode.node.right_ptr, currentQNode.level + 1);
      queue.enQueue(rightQNode);
    }
    previousQNode = currentQNode;
  }
  return root;
}

//Next solution
//Use with out BFS
//one counter -> to track nodes in that level.
//next level counter is number of children in queue at that point.