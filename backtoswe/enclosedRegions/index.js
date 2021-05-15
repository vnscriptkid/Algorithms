function onTheSide(row, col, totalRows, totalCols) {
    return row === 0 || col === 0 || row === totalRows - 1 || col === totalCols - 1;
}

function withinMatrix(matrix, x, y) {
    const totalRows = matrix.length;
    const totalCols = matrix[0].length;

    return x >= 0 && x < totalRows && y >= 0 && y <totalCols;
}

function dfs(matrix, row, col, safeArea) {
    safeArea.add(`${row}:${col}`);

    const neighbors = [
        [row - 1, col], 
        [row, col + 1],
        [row + 1, col],
        [row, col - 1],
    ];

    for (let [x, y] of neighbors) {
        if (withinMatrix(matrix, x, y) && matrix[x][y] === 'O' && !safeArea.has(`${x}:${y}`)) {
            dfs(matrix, x, y, safeArea);
        }
    }
}

function computeEnclosedRegions(matrix) {
    const newMatrix = [...matrix]
    const safeArea = new Set();

    const totalRows = newMatrix.length;
    const totalCols = newMatrix[0].length;

    // traverse 4 sides of matrix
    for (let row=0; row < totalRows; row++) {
        for (let col=0; col < totalCols; col++) {
            if (onTheSide(row, col, totalRows, totalCols) && newMatrix[row][col] === 'O') {
                // do dfs for each O point, marking as safe along the way
                dfs(newMatrix, row, col, safeArea);
            }
        }
    }
    
    // loop all matrix, anything is O that is not safe, must be converted to X
    for (let row=0; row < totalRows; row++) {
        for (let col=0; col < totalCols; col++) {
            if (newMatrix[row][col] === 'O' && !safeArea.has(`${row}:${col}`)) {
                newMatrix[row][col] = 'X';
            }
        }
    }

    return newMatrix;
}

const matrix = [
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "X", "O", "X", "X"],
    ["X", "O", "X", "X", "O", "X"],
    ["O", "X", "X", "O", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],]

const result = computeEnclosedRegions(matrix);

module.exports = { computeEnclosedRegions }
