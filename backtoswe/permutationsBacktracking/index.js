function _generate(token, leftChars, curStr='', all=[]) {
    if (curStr.length === token.length) {
        all.push(curStr);
        return;
    } 

    for (let char of token) {
        if (leftChars.has(char)) {
            leftChars.delete(char);
            _generate(token, leftChars, curStr + char, all);
            leftChars.add(char);
        }
    }
} 

function generate(token) {
    const leftChars = new Set(token.split(''));
    const all = [];
    _generate(token, leftChars, '', all);

    return all;
}

module.exports = { generate }