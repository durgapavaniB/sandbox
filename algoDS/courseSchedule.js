/*
 * Complete the 'course_schedule' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 */


function course_schedule(n, prerequisites) {
  // Write your code here
  //three state - 0, unvisited, 1 - isvisiting, 2 - visited.
  let courseSchedule = [];
  let visited = new Array(n).fill(0);//all unvisisted
  class Graph {
    constructor(n) {
      this.vertices = new Array(n);
    }
    addEdges(edges) {
      edges.forEach(edge => {
        let from = edge[1];
        let to = edge[0];
        if (!Array.isArray(this.vertices[from])) this.vertices[from] = [];
        this.vertices[from].push(to);
      });
    }
  }
  function detectCycleUsingDfs(vertex) {
    if (visited[vertex] === 1)// detected cycle;
      return true;
    else if (visited[vertex] === 0) { //only pursue unvisited vertices
      visited[vertex] = 1;
      let neighs = graph.vertices[vertex];
      if (neighs && neighs.length > 0) { //leaf node
        for (let i = 0; i < neighs.length; i++) {
          let hasCycle = detectCycleUsingDfs(neighs[i]);
          if (hasCycle) return true;
        }
      }
      visited[vertex] = 2; //visisted this vertex.
      courseSchedule.unshift(vertex);
    }
    return false;
  }

  let graph = new Graph(n);
  graph.addEdges(prerequisites);

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) { //unvisisted
      if (detectCycleUsingDfs(i)) return -1;
    }
  }
  return courseSchedule;
}

let result = course_schedule(2, [[1, 0], [0, 1]]);
console.log(result);