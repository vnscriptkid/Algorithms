function areAllPalindromic(arr=[]) {
    return arr.every((item='') => item === item.split('').reverse().join(''));
}

function _decompose(str, separatorIndex=1, all=[], separators=[]) {
    if (separatorIndex === str.length) {
        const decomposed = [];
        const allSeparators = [0, ...separators, str.length];
        for (let [index, separator] of allSeparators.entries()) {
            if (index === 0) continue;
            decomposed.push(str.substring(allSeparators[index - 1], separator));
        }
        if (areAllPalindromic(decomposed)) all.push(decomposed);
        return;
    }

    for (let showUp of [true, false]) {
        if (showUp) {
            separators.push(separatorIndex);
            _decompose(str, separatorIndex + 1, all, separators);
            separators.pop(separatorIndex);
        } else {
            _decompose(str, separatorIndex + 1, all, separators);
        }
    }
}

function decompose(str) {
    const all = [];

    _decompose(str, 1, all);
    
    return all;
}

module.exports = { decompose }