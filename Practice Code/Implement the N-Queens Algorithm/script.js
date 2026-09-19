function dfsNQueens(n){
    if(n < 1){
        return [];
    }

    let solutions = [];
    let board = [];

    function isSafe(row, col){
        for(let prevRow = 0; prevRow < row; prevRow++){
            let prevCol = board[prevRow];

            // Same Column
            if(prevCol === col){
                return false;
            }

            // Same Diagonal
            if(Math.abs(prevRow-row) === Math.abs(prevCol-col)){
                return false;
            }
        }

        return true;
    }

    function dfs(row){
        if(row === n){
            solutions.push([...board]);
            return;
        }

        for(let col = 0; col < n; col++){
            if(isSafe(row, col)){
                board.push(col);
                dfs(row+1);
                board.pop();
            }
        }
    }
    dfs(0);

    return solutions;
}

console.log(dfsNQueens(1));
console.log(dfsNQueens(2));
console.log(dfsNQueens(3));
console.log(dfsNQueens(4));
console.log(dfsNQueens(5));
console.log(dfsNQueens(5).length);
console.log(dfsNQueens(8).length);