function generateMap() {
    const mapping = {};
    Array.from(Array(26).keys()).forEach(i => mapping[i + 1] = String.fromCharCode(i + 65));
    return mapping;
}

function reverseMapping(mapping) {
    const newMapping = {};

    for (let key in mapping) {
        newMapping[mapping[key]] = key;
    }

    return newMapping;
}

function isValidNum(numInStr) {
    const parsedNum = parseInt(numInStr);
    return !isNaN(numInStr)
            && parsedNum >=1
            && parsedNum <=26
            && parsedNum.toString() === numInStr;
}

function _decodeWays(numInString, nextCharIndex, cache={}) {
    if (nextCharIndex === numInString.length) {
        return 1;
    }

    if (nextCharIndex in cache) return cache[nextCharIndex];
    
    let numOfWays = 0;
    
    let nextOneChar = numInString.substr(nextCharIndex, 1);

    if (isValidNum(nextOneChar)) {
        numOfWays += _decodeWays(numInString, nextCharIndex + 1, cache)
    }

    let nextTwoChars = numInString.substr(nextCharIndex, 2);

    if (nextTwoChars.length === 2 && isValidNum(nextTwoChars)) {
        numOfWays += _decodeWays(numInString, nextCharIndex + 2, cache)
    }

    cache[nextCharIndex] = numOfWays;
    
    return numOfWays;
}

function decodeWays(num) {
    const numInString = num.toString();

    return _decodeWays(numInString, 0, {});
}

module.exports = { decodeWays, generateMap, reverseMapping, isValidNum }