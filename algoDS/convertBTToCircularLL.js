'use strict';
function convertBTToCircularLL(root) {
  //Note that we are using array's as global objects, so we dont loose head and tail objects in recurssion.
  var head = [], tail = [];
  //We are doing in order traversal
  function inOrder(root, head, tail) {
    if (root === null) return;
    //Recurse to left most node
    inOrder(root.left_ptr, head, tail);
    if (head.length === 0) { //Only executes once for first left most node
      head.push(root);
    }
    if (tail.length === 0) {  //Only executes once for first left most node
      tail.push(root);
    } else { //Ensure tail points to the new node. 
      tail[0].right_ptr = root; //make double connection between last node and current node
      root.left_ptr = tail[0];
      tail[0] = root;// Replace tail's old node with new tail node
    }
    //Recurse to right most node
    inOrder(root.right_ptr, head, tail);
  }
  inOrder(root, head, tail);
  //Update head and tail pointers.
  if (tail.length !== 0 && head.length !== 0) {
    tail[0].right_ptr = head[0];
    head[0].left_ptr = tail[0];
  }
  return head[0]; //return head node
}