function minSumPath(triangle) {
    const minPaths = [...triangle[triangle.length - 1]]; // min paths if starting at last row

    // min paths starting at curRow
    let curRowWeights;
    for (let curRow = triangle.length - 2; curRow >= 0; curRow--) {
        curRowWeights = triangle[curRow]; 

        for (let [col, weight] of curRowWeights.entries()) {
            minPaths[col] = weight + Math.min(minPaths[col], minPaths[col + 1]) 
        }
    }

    return minPaths[0];
}

module.exports = { minSumPath }