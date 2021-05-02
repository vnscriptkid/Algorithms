function nextChar(sortedCharSpace, currentChar) {
    currentCharIndex = sortedCharSpace.indexOf(currentChar);

    if(currentCharIndex === -1 || currentCharIndex === sortedCharSpace.length - 1) return null;

    return sortedCharSpace[currentCharIndex + 1];
}

function nextPermutation(str) {
    // 6215430
    let leftChar, rightChar;
    charSpace = [];
    let output = '';

    for (let i = str.length - 1; i > 0; i--) {
        rightChar = str[i];
        leftChar = str[i - 1]
        charSpace.push(rightChar);

        if (rightChar > leftChar) {
            charSpace.push(leftChar);
            output = str.substr(0, i - 1); // 62
            break;
        }
    }

    if (!output) return null;

    charSpace.sort(); // ['0', '1', '3', '4', '5']
    const leftMostChar = nextChar(charSpace, leftChar);
    output += leftMostChar; // 623
    output += charSpace.filter(char => char !== leftMostChar).join('');
    return output;
}

module.exports = { nextPermutation, nextChar }