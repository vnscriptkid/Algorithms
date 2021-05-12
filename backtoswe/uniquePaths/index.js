function generateMatrix(rows, cols) {
    return Array.from(Array(rows)).map(row => Array.from(Array(cols)).map(col => 0));
}

function uniquePaths(rows, cols) {
    const matrix = generateMatrix(rows, cols);

    // base case
    matrix[0].forEach((val, col) => matrix[0][col] = 1); // row 0 is all 1
    Array.from(Array(rows).keys()).forEach(row => matrix[row][0] = 1); // col 0 is all 1

    // solve subproblems incrementally
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
        }
    }

    return matrix[rows - 1][cols - 1]
}

module.exports = { uniquePaths, generateMatrix } 
