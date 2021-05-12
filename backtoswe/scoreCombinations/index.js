function generateCombinations(matrix, candidates, row, col, curCombination=[], all=[]) {
    if (col === 0) {
        all.push([...curCombination]);
        return;
    }
    // go left (included)
    const curCandidate = candidates[row - 1];

    if (col - curCandidate >= 0 && matrix[row][col - curCandidate] >= 1) {
        curCombination.push(curCandidate);
        generateCombinations(matrix, candidates, row, col - curCandidate, curCombination, all);
        curCombination.pop();
    }

    // go up (excluded)
    if (matrix[row - 1][col] >= 1) {
        generateCombinations(matrix, candidates, row - 1, col, curCombination, all);
        curCombination.pop();
    }
}

function generateMatrix(rows, cols) {
    return Array.from(Array(rows)).map(row => 
            Array.from(Array(cols)).map(col => 0)
        );
}

function findCombinationSum(candidates, target) {
    const rows = candidates.length + 1;
    const cols = target + 1;
    
    let matrix = generateMatrix(rows, cols)
    let candidateIncluded, candidateExcluded, candidate;

    for (let row=1; row<rows; row++) {
        for (let col=0; col<cols; col++) {
            // setup base case
            if (col === 0) {
                matrix[row][col] = 1;
                continue;
            }

            // calculate
            candidate = candidates[row - 1];
            candidateExcluded = matrix[row - 1][col];
            candidateIncluded = col - candidate >= 0 ? matrix[row][col - candidate] : 0;

            // combine 2 options
            matrix[row][col] = candidateExcluded + candidateIncluded;            
        }
    }

    const combinations = [];
    generateCombinations(matrix, candidates, rows-1, cols-1, [], combinations)
    combinations.forEach(c => c.sort() || c);
    combinations.reverse();

    return combinations;
}

function countCombinationSum(candidates, target) {
    const rows = candidates.length + 1;
    const cols = target + 1;
    
    let matrix = generateMatrix(rows, cols)
    let candidateIncluded, candidateExcluded, candidate;

    for (let row=1; row<rows; row++) {
        for (let col=0; col<cols; col++) {
            // setup base case
            if (col === 0) {
                matrix[row][col] = 1;
                continue;
            }

            // calculate
            candidate = candidates[row - 1];
            candidateExcluded = matrix[row - 1][col];
            candidateIncluded = col - candidate >= 0 ? matrix[row][col - candidate] : 0;

            // combine 2 options
            matrix[row][col] = candidateExcluded + candidateIncluded;            
        }
    }

    return matrix[rows - 1][cols - 1];
}

module.exports = { countCombinationSum, findCombinationSum } 