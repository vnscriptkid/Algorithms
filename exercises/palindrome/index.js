// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// function palindrome(str) {
//     let left = 0, right = str.length - 1;
//     while (left < right) {
//         if (str.charAt(left) !== str.charAt(right))
//             return false;
//         left++;
//         right--;
//     }
//     return true;
// }

function palindrome(str) {
    function haveACoresponding(char, index) {
        return char === str.charAt(str.length - 1 - index);
    }
    
    return str.split('').every(haveACoresponding);
}


module.exports = palindrome;
