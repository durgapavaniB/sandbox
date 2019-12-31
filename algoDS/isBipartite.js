var isBipartite = function (graph) {
  let q = [], color = {}, size = 0;

  for (let i = 0; i < graph.length; i++) { //This for loop is required as graph could have disconnected components. 
    if (color[i] === undefined) { //Only visit unvisited nodes
      color[i] = 'red';
      q.push(i);
      while (q.length > 0) {
        let currVertex = q.shift();
        let neighbors = graph[currVertex];
        for (let j = 0; j < neighbors.length; j++) {
          if (color[neighbors[j]] === undefined) { //not visited
            color[neighbors[j]] = color[currVertex] == 'red' ? 'black' : 'red';
            q.push(neighbors[j]);
          } else if (color[neighbors[j]] === color[currVertex]) { //Vertex. Already visited and it has same color group. This graph cant be a bipartite.
            return false;
          }
        }
      }
    }

  }
  return true;
};