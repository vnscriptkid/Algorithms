const {MinHeap} = require('./minHeap');

function sort(arr, k) {
    const output = [];
    const selectionSpace = new MinHeap();

    let count = 0;
    while (count !== k + 1) {
        selectionSpace.insert(arr[count]);
        count++;
    }

    for (let next = k + 1; next < arr.length; next++) {
        output.push(selectionSpace.popMin());
        selectionSpace.insert(arr[next]);
    }

    while (!selectionSpace.empty()) {
        output.push(selectionSpace.popMin());
    }

    return output;
}

module.exports = { sort }