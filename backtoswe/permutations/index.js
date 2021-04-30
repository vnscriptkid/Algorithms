function removeCharAtIndex(str, index) {
    return str.substr(0, index) + str.substr(index + 1);
}

function permutations(str, current='', result=[]) {
    if (!str.length) {
        result.push(current);
        return;
    }

    str.split('').forEach((char, index) => {
        permutations(removeCharAtIndex(str, index), current + char, result)
    });


    return result;
}

module.exports = { removeCharAtIndex, permutations }
