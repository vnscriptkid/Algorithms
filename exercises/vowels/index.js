// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1st way: iterative solution
// function vowels(str) {
//     const allVowels = 'aeiou';
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (allVowels.includes(char)) count++;
//     }
//     return count;
// }

// 2nd way: using regex 1
// function vowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (/[aeiou]/gi.test(char)) count++;
//     }
//     return count;
// }

// 3nd way: using regex 2
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
