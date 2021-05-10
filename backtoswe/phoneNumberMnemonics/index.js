const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': 'x'
}

function _generate(token, current='', all=[]) {
    if (current.length === token.length) {
        all.push(current);
        return;
    }

    for (let char of mapping[token[current.length]]) {
        current += char;
        _generate(token, current, all)
        current = current.slice(0, -1)
    }
}

function generate(token) {
    const possibilities = [];

    _generate(token, '', possibilities);

    return possibilities;
}

const result = generate('23');

module.exports = { generate }