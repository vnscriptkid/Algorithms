// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalizeOneWord(word) {
//     return word[0].toUpperCase() + word.substr(1);
// }

// function capitalize(str) {
//     return str.split(' ').map(capitalizeOneWord).join(' ');
// }

function capitalize(str) {
    output = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        const leftChar = str[i - 1];
        let currentChar = str[i];
        if (leftChar === ' ') {
            currentChar = currentChar.toUpperCase();
        }
        output += currentChar;
    }
    
    return output;
}

module.exports = capitalize;
