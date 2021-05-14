// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    withinMatrix(rows, cols) {
        return this.x >= 0 && this.x < rows && this.y >= 0 && this.y < cols;
    }

    sameColor(matrix, color) {
        return matrix[this.x][this.y] === color;
    }
}

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.push(value);
    }

    dequeue() {
        return this.data.shift();
    }

    empty() {
        return this.data.length === 0;
    }
}

function getConnectedPoints(matrix, targetPoint, oldColor) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    // top, right, bottom, left
    const {x, y} = targetPoint;

    const neighbors = [new Point(x - 1, y), new Point(x, y + 1), new Point(x + 1, y), new Point(x, y - 1)];

    return neighbors.filter(point => point.withinMatrix(rows, cols) && point.sameColor(matrix, oldColor))
}

function paint(matrix, x, y, newColor) {
    const startingPoint = new Point(x, y);
    const queue = new Queue();
    const seen = new Set();
    const oldColor = matrix[x][y];

    // first point
    queue.enqueue(startingPoint);
    seen.add(startingPoint);
    matrix[x][y] = newColor;
    

    let nextPoint = null;
    let connectedPoints = [];

    while (!queue.empty()) {
        nextPoint = queue.dequeue();
        connectedPoints = getConnectedPoints(matrix, nextPoint, oldColor);

        for (let point of connectedPoints) {
            if (!seen.has(point)) {
                seen.add(point);
                queue.enqueue(point);
                matrix[point.x][point.y] = newColor;
            }
        }
    }
}

module.exports = { paint, getConnectedPoints, Point }