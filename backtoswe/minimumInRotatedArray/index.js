function findMinimum(rotatedArray) {
    let left = 0, right = rotatedArray.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor(left + (right - left) / 2);

        if (rotatedArray[middle] < rotatedArray[middle - 1])
            return middle;

        if (rotatedArray[middle] < rotatedArray[right]) { // drop point on the left
            right = middle - 1;
        } else { // drop point on the right
            left = middle + 1;
        }
    }
}

module.exports = { findMinimum }