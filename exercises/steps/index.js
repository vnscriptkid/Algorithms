// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 1st way
// function multiplyChar(char, times) {
//     return Array.from(new Array(times)).map(() => char).join('');
// }


// function steps(n) {
//     for (let row = 1; row <= n; row++) {
//         console.log(multiplyChar('#', row) + multiplyChar(' ', n - row));
//     }
// }

// 2nd way
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let line = '';
//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);      
//     }
// }



// 3rd way: Using recursion
function steps(n, row = 0, line = '') {
    if (row === n) return;

    if (line.length === n) {
        console.log(line);
        steps(n, row + 1);
    } else {
        line = line.length <= row ? line + '#' : line + ' ';
        steps(n, row, line)
    }
}

module.exports = steps;
