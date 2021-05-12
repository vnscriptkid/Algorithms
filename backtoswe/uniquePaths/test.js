const {generateMatrix, uniquePaths} = require('./index');

test('generateMatrix() works', () => {
    const matrix = generateMatrix(2, 3);
    expect(Array.isArray(matrix)).toEqual(true);
    expect(matrix.length).toEqual(2);
    expect(matrix[0].length).toEqual(3);
    for (let row of matrix) {
        for (let val of row) {
            expect(val).toEqual(0);
        }
    }
});

test('uniquePaths() works', () => {
    const result = uniquePaths(4, 8);
    expect(result).toEqual(120);
});