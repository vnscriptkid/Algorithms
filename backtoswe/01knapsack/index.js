function generateMatrix(rows, cols, defaultValue=0) {
    return Array.from(Array(rows)).map(row => 
            Array.from(Array(cols)).map(col => defaultValue)
        );
}

function maximizeKnapsackValue(items, maxWeight) {
    const rows = items.length + 1;
    const cols = maxWeight + 1;

    const matrix = generateMatrix(rows, cols, 0);
    let maxValueWithItem, maxValueWithoutItem;

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            const [value, weight] = items[row - 1];

            maxValueWithoutItem = matrix[row - 1][col];
            maxValueWithItem = col >= weight ? value + matrix[row - 1][col - weight] : 0;

            matrix[row][col] = Math.max(maxValueWithItem, maxValueWithoutItem);
        }
    }

    return matrix[rows - 1][cols - 1];
}

module.exports = { maximizeKnapsackValue }

