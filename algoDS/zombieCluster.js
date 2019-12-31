/*
 * Complete the 'zombieCluster' function below.
 *
 * The function accepts STRING ARRAY as parameter.
 * We have to find number of components with given n*n matrix.
 */
function zombieCluster(zombies) {
  const visited = {};
  for (let i = 0; i < zombies.length; i++) {
    visited[i] = false;
  }
  let components = 0;

  function dfs(vertex) {
    if (visited[vertex]) return;
    visited[vertex] = true;
    for (let neigh = 0; neigh < zombies[vertex].length; neigh++) { // go through all valid neighbors
      let value = parseInt(zombies[vertex].charAt(neigh));
      if (value && neigh !== vertex) //if zombies[vertex][neigh] is 1 and neigh is not same as vertex.
        dfs(neigh);
    }
  }

  for (let vertex = 0; vertex < zombies.length; vertex++) { //Each row represents a vertex available.
    if (!visited[vertex]) {//haven't visited yet
      dfs(vertex);
      components++;
    }
  }
  return components;
}

let clusters = zombieCluster(["1100", "1110", "0110", "0001"]);
console.log(clusters);


