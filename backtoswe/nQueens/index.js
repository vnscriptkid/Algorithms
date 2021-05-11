class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static makeListCoords(arr) {
        const output = [];
        for (let [row, col] of arr.entries()) {
            output.push(new Coord(row, col));
        }   
        return output;
    }
}

class Chessboard {
    constructor(n) {
        this.grid = this.generateBoard(n);
        this.size = n;
    }

    generateBoard(n) {
        return Array.from(Array(n)).map(row => Array.from(Array(n)).map(col => 0))
    }

    print() {
        this.grid.forEach(row => console.log(row));
    }

    diagonalAttacked(placedCols, row, col) {
        for (let [placedRow, placedCol] of placedCols.entries()) {
            if (Math.abs(row - placedRow) === Math.abs(col - placedCol)) return true;
        }
        return false;
    }

    _placeQueen(row=0, placedCols=[], all=[]) {
        if (row === this.size) {
            // out of choice
            all.push([...placedCols]);
            return;
        }

        const possibleCols = Array.from(Array(this.size).keys()).filter(col => !placedCols.includes(col));

        for (let col of possibleCols) {
            if (!this.diagonalAttacked(placedCols, row, col)) {
                placedCols.push(col);
                this._placeQueen(row + 1, placedCols, all);
                placedCols.pop();
            }
        }
    }

    nQueens() {
        const all = [];

        this._placeQueen(0, [], all);

        return all.map(list => Coord.makeListCoords(list));
    }
}

module.exports = { Chessboard, Coord }