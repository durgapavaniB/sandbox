
/*
 * Complete the 'hasCycle' function below.
 *
 * The function accepts INTEGER N, INTEGER M and 2D_INTEGER_ARRAY edges as parameter.
 * The function is expected to return a BOOLEAN.
 * number of vertices N = 5, edges M = 7, edges = [[0,1],[0,3],[1,3],[1,2],[2,3],[4,0],[2,4]]
 */
function hasCycle(N, edges) {
  function buildGraph(N, edges) {
    let graph = new Array(N);
    for (let i = 0; i < edges.length; i++) {//Add edges
      let from = edges[i][0];
      let to = edges[i][1];
      if (!Array.isArray(graph[from])) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
    return graph;
  }
  function dfs_vertex(vertex) {
    if (seen[vertex] === 1) return true;//already in stack
    else if (seen[vertex] === 0) { //only pursue unvisited vertices
      seen[vertex] = 1; //set to isvisiting
      let neighs = graph[vertex];
      if (neighs && neighs.length > 0) {
        for (let i = 0; i < neighs.length; i++) {
          let hasCycle = dfs_vertex(neighs[i]);
          if (hasCycle) return true;
        }
      }
    }
    seen[vertex] = 2;
    return false;
  }
  // Write your code here
  //DFS uses recursion and has inbuild stack. we need three states for regular DFS.
  let seen = new Array(N).fill(0); //0 is unvisited, 1 is vising, 2 is visited
  let graph = buildGraph(N, edges);
  for (let i = 0; i < graph.length; i++) {
    //This graph may have disconnected components so do the dfs on all unseen vertices
    if (seen[i] === 0) {
      if (dfs_vertex(i)) return true;
    }
  }
  return false; //No cycle found in all components
}
//TEST
/*let x = hasCycle(2,[[0,1],[1,0]]);
console.log(x);*/
let x = hasCycle(5, [[0, 1], [1, 3], [2, 3], [1, 2], [4, 1], [0, 4]]);
console.log(x);

