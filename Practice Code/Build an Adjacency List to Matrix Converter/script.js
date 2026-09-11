function adjacencyListToMatrix(adjacencyList) {
  const nodeCount = Object.keys(adjacencyList).length;
  let matrix = [];

  // Create an n x n matrix filled with 0
  for (let i = 0; i < nodeCount; i++) {
    matrix.push([]);

    for (let j = 0; j < nodeCount; j++) {
      matrix[i].push(0);
    }
  }

  // Set 1 where an edge exists
  for (const node in adjacencyList) {
    const neighbors = adjacencyList[node];

    for (const neighbor of neighbors) {
      matrix[node][neighbor] = 1;
    }
  }

  // Print each row
  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}