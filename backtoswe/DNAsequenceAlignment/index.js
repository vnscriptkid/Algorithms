const GAP_COST = 2;
const MISMATCH_COST = 3;

function generateCostMatrix(rows, cols) {
    return Array.from(Array(rows)).map((row, rowIndex) => {
        return Array.from(Array(cols)).map((col, colIndex) => {
            if (rowIndex === 0) return GAP_COST * colIndex;
            if (colIndex === 0) return GAP_COST * rowIndex;
            return null;
        })
    })
}

function buildString(costMatrix, s1, s2) {
    let newS1='', newS2='';
    let [x, y] = [s1.length, s2.length];

    while (x !== 0 && y !== 0) {
        const topCost = GAP_COST + costMatrix[x - 1][y];
        const leftCost = GAP_COST + costMatrix[x][y - 1];
        const diagonalCost = costMatrix[x - 1][y - 1] + (s1[x-1] === s2[y-1] ? 0 : MISMATCH_COST);

        const minCost = Math.min(topCost, leftCost, diagonalCost);

        switch (minCost) {
            case diagonalCost:
                newS1 = s1[x - 1] + newS1;
                newS2 = s2[y - 1] + newS2;
                x--; y--;
                break;
            case leftCost: // gap in s1
                newS1 = '_' + newS1;
                newS2 = s2[y - 1] + newS2;
                y--; 
                break;
            case topCost: // gap in s2
                newS2 = '_' + newS2;
                newS1 = s1[x - 1] + newS1;
                x--;
                break;
        }
    }

    // return mapping;
    return [newS1, newS2];
}

function align(s1, s2) {
    const rows = s1.length + 1;
    const cols = s2.length + 1;

    const costMatrix = generateCostMatrix(rows, cols);

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            costMatrix[i][j] = Math.min(
                GAP_COST + costMatrix[i][j - 1],
                GAP_COST + costMatrix[i - 1][j],
                costMatrix[i - 1][j - 1] + (s1.charAt(i - 1) === s2.charAt(j - 1) ? 0 : MISMATCH_COST)
            );
        }
    }

    return buildString(costMatrix, s1, s2);
}

module.exports = { align }