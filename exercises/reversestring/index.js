// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Simplest way
// '123' => '1' => '21' => '321'
function reverse(str) {
    let output = '';

    for (let char of str) {
        output = char + output;
    }

    return output;
}

// Javascript way
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Recursive way
// function reverse(str) {
//     if (str === '') return '';
//     return reverse(str.substr(1)) + str.charAt(0);
// }


module.exports = reverse;
