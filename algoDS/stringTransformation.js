
/*
 * Complete the function below.
 */
function string_transformation(words, start, stop) {
  const parent = {};
  function buildPath(stop, parent, distance) {
    const res = [];
    let curr = stop;
    while (distance > -1 && curr !== undefined) {
      res.unshift(curr);
      curr = parent[curr];
      distance--;
    }
    //res.unshift(curr);
    return res;
  }

  function solEnumerateChars(curr) {
    const neigh = [];
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < curr.length; i++) {
      //For Current character index, enumerate all other characters except this character and check in map.
      for (let j = 0; j < chars.length; j++) {
        if (chars[j] !== curr[i]) {
          //Ensure this will not impact existing curr word.
          let currEnumeratedWord = curr.substr(0, i) + chars[j] + curr.substr(i + 1);
          if (map[currEnumeratedWord] !== undefined) {
            neigh.push(currEnumeratedWord);
          }
        }
      }
    }
    return neigh;
  }

  function solCompareWords(curr) {
    const neigh = [];
    //find number of characters difference between two words. If greater than 1 skip.
    for (let i = 0; i < words.length; i++) {
      let currWord = words[i]; let charDiff = 0;
      for (let j = 0; j < currWord.length; j++) {
        if (currWord[j] !== curr[j]) charDiff++;
        if (charDiff > 1) break; //break this for loop and continue with next word.
      }
      if (charDiff === 1) neigh.push(currWord);
    }
    return neigh;
  }

  function getNeighbors(curr, n, l) {
    if (n > 26 * l) {
      return solEnumerateChars(curr);
    } else {
      return solCompareWords(curr);
    }
  }

  //check if stop word is in words, if not add stop word to words. 
  /*if(words.indexOf(stop) < 0){//stop word not found.
    words.push(stop);
  }*/
  words.push(stop);

  let map = {};
  words.forEach(function (word) { map[word] = 0 });

  const n = words.length;
  const l = start.length;

  //BFS to find shortest distance from start to stop.
  const queue = [], visited = {};
  let level = 0, size = 0;
  queue.push(start);
  //visited[start] = true;
  while (queue.length > 0) {
    size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      let neigh = getNeighbors(curr, n, l);
      for (let j = 0; j < neigh.length; j++) {
        let currNeigh = neigh[j];
        if (!visited[currNeigh]) {
          visited[currNeigh] = true;
          parent[currNeigh] = curr;
          if (currNeigh === stop) return buildPath(currNeigh, parent, level);
          queue.push(currNeigh);
        }
      }
    }

  }
  return [-1]; //Not found stop or not found a way to reach to stop.  
}



let result = string_transformation(['cot', 'bot', 'bat', 'ban'], 'cat', 'ban');
console.log(result);