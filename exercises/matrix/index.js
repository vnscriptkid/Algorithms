// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function initMatrix(n) {
    const output = [];

    for (i = 0; i < n; i++) {
        let row = Array.from(new Array(n)).map(() => 0);
        output.push(row);
    }

    return output;
}

function printMatrix(matrix) {
    matrix.forEach(row => console.log(row))
}

function MatrixLimit(n) {
    this.startRow = 0;
    this.endRow = n - 1;
    this.startCol = 0;
    this.endCol = n - 1;
}

function traverse(matrix, sideName, matrixLimit, counter) {
    let currentCol, currentRow;
    switch (sideName) {
        case 'top':
            // fix startRow, increment col
            currentRow = matrixLimit.startRow;
            currentCol = matrixLimit.startCol;
            while (currentCol <= matrixLimit.endCol) {
                matrix[currentRow][currentCol] = counter.getCounter();
                counter.increment();
                currentCol++;
            }
            matrixLimit.startRow += 1;
            break;
        case 'right':
            // fix endCol, increment row
            currentCol = matrixLimit.endCol;
            currentRow = matrixLimit.startRow;
            while (currentRow <= matrixLimit.endRow) {
                matrix[currentRow][currentCol] = counter.getCounter();
                counter.increment();
                currentRow++;
            }
            matrixLimit.endCol -= 1;
            break;
        case 'bottom':
            // fix endRow, decrement col
            currentRow = matrixLimit.endRow;
            currentCol = matrixLimit.endCol;
            while (currentCol >= matrixLimit.startCol) {
                matrix[currentRow][currentCol] = counter.getCounter();
                counter.increment();
                currentCol--;
            }
            matrixLimit.endRow -= 1;
            break;
        case 'left':
            // fix startCol, decrement row
            currentCol = matrixLimit.startCol;
            currentRow = matrixLimit.endRow;
            while (currentRow >= matrixLimit.startRow) {
                matrix[currentRow][currentCol] = counter.getCounter();
                counter.increment();
                currentRow--;
            }
            matrixLimit.startCol += 1;
            break;
        default:
            throw new Error('Something went wrong');
    }
}

function makeCounter(initialValue = 0) {
    let counter = initialValue;
    return {
        increment(step = 1) {
            counter += step
        },
        getCounter() {
            return counter;
        }
    }
}

function matrix(n) {
    const output = initMatrix(n);

    let counter = makeCounter(1);
    const sideTraverseOrders = ['top', 'right', 'bottom', 'left'];
    let sideTraverseIndex = 0;
    const matrixLimit = new MatrixLimit(n);
    
    while (counter.getCounter() <= Math.pow(n, 2)) {
        currentSide = sideTraverseOrders[sideTraverseIndex % 4];
        
        traverse(output, currentSide, matrixLimit, counter);

        sideTraverseIndex++;
    }

    // printMatrix(output)

    return output;
}

matrix(4)

module.exports = matrix;
