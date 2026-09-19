function dfs(graph, root) {
  let stack = [root];
  let visited = [];

  while (stack.length > 0) {
    let node = stack.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      for (let i = 0; i < graph[node].length; i++) {
        if (graph[node][i] === 1) {
          stack.push(i);
        }
      }
    }
  }

  return visited;
}

console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1));
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3));
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3));
console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3));
console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0));