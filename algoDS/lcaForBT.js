//Find Least common Ancesstor in a Binary tree.
function lca(root, node_a, node_b) {
  if (root === null) return null;
  else if (root.data === node_a.data || root.data === node_b.data) return root.data;
  let leftResult = lca(root.left, node_a, node_b);
  let rightResult = lca(root.right, node_a, node_b);
  if (leftResult && rightResult)
    return root.data;
  else if (leftResult || rightResult)
    return leftResult ? leftResult : rightResult;
  //else if(leftResult === null && rightResult === null)
  //return null;
}
