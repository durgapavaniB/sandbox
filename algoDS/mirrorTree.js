function mirrorTreeBFS(root) {
  if (root == null) return;

}

function mirrorTreeDFS(root) {
  if (root === null) return;
  //Swap children nodes
  let tmp = root.left_ptr;
  root.left_ptr = root.right_ptr;
  root.right_ptr = tmp;
  mirrorTreeDFS(root.left_ptr);
  mirrorTreeDFS(root.right_ptr);
}