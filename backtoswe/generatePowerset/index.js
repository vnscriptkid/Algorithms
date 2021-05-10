function _generatePowerset(arr, curIndex=0, curSet=[], all=[]) {
    if (curIndex === arr.length) {
        all.push([...curSet]);
        return;
    }

    for (let showUp of [true, false]) {
        if (showUp) curSet.push(arr[curIndex]);

        _generatePowerset(arr, curIndex+1, curSet, all)

        if (showUp) curSet.pop();
    }
}

function generatePowerset(arr) {
    const all = []
    _generatePowerset(arr, 0, [], all);
    return all;
}


module.exports = { generatePowerset }