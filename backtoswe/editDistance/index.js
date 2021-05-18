function generateMatrix(rows, cols, defaultValue=0) {
    return Array.from(Array(rows)).map((row, rowIndex) => 
        Array.from(Array(cols)).map((col, colIndex) => {
            if (rowIndex === 0) return colIndex;
            if (colIndex === 0) return rowIndex;
            return defaultValue;
        }))
}

function editDistance(s1, s2) {
    const rows = s1.length + 1;
    const cols = s2.length + 1;
    
    const distanceMatrix = generateMatrix(rows, cols);

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            distanceMatrix[i][j] = Math.min(
                1 + distanceMatrix[i][j - 1],
                1 + distanceMatrix[i - 1][j],
                distanceMatrix[i - 1][j - 1] + (s1.charAt(i - 1) === s2.charAt(j - 1) ? 0 : 1)
            )
        }
    }

    console.log(distanceMatrix);

    return distanceMatrix[rows - 1][cols - 1];
}

module.exports = { editDistance }