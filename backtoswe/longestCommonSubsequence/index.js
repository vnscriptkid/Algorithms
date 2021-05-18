function generateMatrix(rows, cols) {
    return Array.from(Array(rows)).map(row => {
        return Array.from(Array(cols)).map(col => 0);
    });
}

function lcs(s1, s2) {
    const rows = s1.length + 1;
    const cols = s2.length + 1;
    
    const lcsMatrix = generateMatrix(rows, cols);

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (s1.charAt(i - 1) === s2.charAt(j - 1))
                lcsMatrix[i][j] = 1 + lcsMatrix[i - 1][j - 1];
            else
                lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1])
        }
    }
    
    return lcsMatrix[rows - 1][cols - 1];
}

module.exports = { lcs }