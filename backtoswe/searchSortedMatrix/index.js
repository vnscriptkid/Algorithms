class Coordinate {
    constructor({x, y}) {
        this.x = x;
        this.y = y;
    }

    static makeFromIndex(matrix, index) {
        const cols = matrix[0].length;

        return new Coordinate({
            x: Math.floor(index / cols),
            y: index % cols
        });
    }
}

function getValue(matrix, index) {
    const {x, y} = Coordinate.makeFromIndex(matrix, index);
    return matrix[x][y];
}

function search(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0, right = rows * cols - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor(left + (right - left) / 2);

        if (getValue(matrix, middle) === target)
            return Coordinate.makeFromIndex(matrix, middle);
        else if (getValue(matrix, middle) > target)
            right = middle - 1;
        else
            left = middle + 1;
    }
    return null;
}

module.exports = { search }