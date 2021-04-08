// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildDict(str) {
    const output = {};
    for (let char of str) {
        if (!output[char]) {
            output[char] = 1;
        } else {
            output[char]++;
        }
    }
    return output;
}

Object.prototype.sameAs = function(other) {
    if (Object.keys(this).length !== Object.keys(other).length) return false;
    for (let key in this) {
        if (this[key] !== other[key])
            return false;
    }
    return true;
}

// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

//     dictA = buildDict(stringA);
//     dictB = buildDict(stringB);

//     return dictA.sameAs(dictB);
// }

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    sortedA = stringA.split('').sort().join('');
    sortedB = stringB.split('').sort().join('');

    return sortedA === sortedB;
}

module.exports = anagrams;
