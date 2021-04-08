// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {};
    let output = '', max = 0;

    for (let char of str) {
        dict[char] = dict[char] ? dict[char] + 1 : 1;
    }

    for (let char in dict) {
        if (dict[char] > max) {
            output = char;
            max = dict[char];
        }
    }

    return output;
}

module.exports = maxChar;
