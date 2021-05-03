function longest(str) {
    // build char map
    const charMap = {};

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }
    let output = 0;
    let hasMiddleChar = false;

    // build longest
    for (let char in charMap) {
        const charCount = charMap[char];
        if (charCount % 2 == 0) {
            output += charCount;
        } else {
            if (charCount > 1) output += (charCount - 1)
            hasMiddleChar = true;
        }
    }

    if (hasMiddleChar) output += 1;

    return output;
}

function longest2(str) {
    const waitForPair = new Set();
    let output = 0;

    for (let char of str) {
        if (waitForPair.has(char)) {
            waitForPair.delete(char)
            output += 2;
        }
        else {
            waitForPair.add(char);
        }
    }

    if (waitForPair.size) output += 1;

    return output;
}

module.exports = { longest, longest2 }