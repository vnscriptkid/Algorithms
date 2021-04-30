function find(arr, k) {
    let left = 0, right = arr.length - 1;
    let middle = 0;
    let foundIndex = null;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (arr[middle] === k) {
            // can be a candidate
            foundIndex = middle;
            right = middle - 1;
        }

        else if (k > arr[middle]) {
            // on the right
            left = middle + 1;
        }

        else {
            // on the left
            right = middle - 1;
        }
    }

    return foundIndex;
}

module.exports = { find }