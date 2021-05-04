function isBalanced(str) {
    const mapping = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack = [];

    for (let char of str) {
        if (char in mapping) { // opening
            stack.push(char);
        } else if (Object.values(mapping).indexOf(char) !== -1) { // closing
            if (stack.length === 0 || mapping[stack.pop()] !== char)
                return false;
        }
    }

    if (stack.length > 0) return false;

    return true;
}

module.exports = { isBalanced }