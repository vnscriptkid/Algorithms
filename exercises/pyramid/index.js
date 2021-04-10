// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1st way: iterative way 2 using 1 loop
// function multiplyChars(char, times) {
//     return Array.from(new Array(times)).map(() => char).join('');
// }

// function pyramid(n) {
//     const cellsPerLine = 1 + (n - 1) * 2;

//     for (let i = 0; i < n; i++) {
//         const numOfHashes = 1 + i * 2;
//         const numOfSpaces = cellsPerLine - numOfHashes;
//         const spacesEachSide = numOfSpaces / 2;
//         const line = multiplyChars(' ', spacesEachSide) + multiplyChars('#', numOfHashes) + multiplyChars(' ', spacesEachSide);
//         console.log(line);
//     }
// }

// 2nd way: iterative way 2 using 2 loop

// function pyramid(n) {
//     const cellsPerLine = n * 2 - 1;
//     const midpoint = Math.floor(cellsPerLine / 2);

//     for (let row = 0; row < n; row++) {
//         let line = '';
//         for (let col = 0; col < cellsPerLine; col++) {
//             const isInHashRange = col >= (midpoint - row) && col <= (midpoint + row)
//             if (isInHashRange) {
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);
//     }
// }

// recursive way
function pyramid(n, row = 0, line = '') {
    if (row === n) return;
    const lineMaxLength = n * 2 - 1;
    const midpoint = Math.floor(lineMaxLength / 2);

    if (line.length === lineMaxLength) {
        console.log(line);
        pyramid(n, row + 1)
        return;
    }

    if (line.length >= midpoint - row && line.length <= midpoint + row) {
        line += '#';
    } else {
        line += ' ';
    }

    pyramid(n, row, line);
} 

pyramid(3)

//   #
//  ###
// ####3

module.exports = pyramid;
