class Sudoku {
    constructor(grid) {
        this.grid = grid;
    }

    solve(row=0, col=0) {
        if (row === 9) {
            // done solving
            return;
        } else if (col === 9) {
            // next row
            this.solve(row + 1, 0)
            return;
        }

        if (this.grid[row][col] !== 0) {
            this.solve(row, col + 1);
            return;
        }

        for (let val of [1,2,3,4,5,6,7,8,9]) {
            this.grid[row][col] = val;
            if (this.validateRowAndCol(row, col)) {
                // next cell
                this.solve(row, col + 1);
            }
            // backtrack
            this.grid[row][col] = 0;
        }
    }

    validateRowAndCol(row, col) {
        // validate row
        if (this.hasDuplicate(this.grid[row])) return false;
        
        // validate col
        const colVals = Array.from(Array(9).keys()).map(row => this.grid[row][col]);
        if (this.hasDuplicate(colVals)) return false;

        return true;
    }

    hasDuplicate(arr) {
        const seenValues = new Set();

        for (let val of arr) {
            if (val === 0) continue;
            if (seenValues.has(val)) return true;
            seenValues.add(val);
        }

        return false;
    }

    print() {
        this.grid.map(row => console.log(row))
    }
}

module.exports = { Sudoku }