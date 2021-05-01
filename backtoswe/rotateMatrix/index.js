function rotate(matrix) {
    const size = matrix.length;
    const totalLayers = Math.floor(size / 2);

    for (let layer = 0; layer < totalLayers; layer++) {
        for (let i = layer; i < size - layer - 1; i++) {
            let top = matrix[layer][i];
            let right = matrix[i][size - 1 - layer];
            let bottom = matrix[size - 1 - layer][size - 1 - i];
            let left = matrix[size - 1 - i][layer];

            matrix[layer][i] = left; // left -> top
            matrix[i][size - 1 - layer] = top; // top -> right
            matrix[size - 1 - layer][size - 1 - i] = right; // right -> bottom
            matrix[size - 1 - i][layer] = bottom;  // bottom -> left
        }
    }
}

module.exports = { rotate }