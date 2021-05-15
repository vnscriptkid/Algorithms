function withinMatrix(grid, cell) {
    const rows = grid.length;
    const cols = grid[0].length;
    const [x, y] = cell;

    return x >= 0 && x < rows && y >= 0 && y < cols;    
}

function isNotBlocked(grid, cell) {
    const [x, y] = cell;
    return grid[x][y] === 0;
}

function canFindPathFrom(grid, source, target, path) { // source is current move
    let [x, y] = source;
    path.push([x, y]);

    if (source[0] === target[0] && source[1] === target[1]) {
        return true;
    }

    // top right bottom left
    grid[x][y] = 1;

    for (let cell of [[x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]]) {
        if (withinMatrix(grid, cell) && isNotBlocked(grid, cell)) {
            if (canFindPathFrom(grid, cell, target, path)) return true;
            path.pop();
        }
    }

    return false;
}

function search(grid, source, target) {
    const path = [];

    if (!canFindPathFrom(grid, source, target, path)) return null;

    return path;
}

const grid = [
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
];

const result = search(grid, [4, 0], [0, 4]);

module.exports = { search }