function binarySearch(sortedArr, target) {
    let left = 0, right = sortedArr.length - 1;
    let middle;
    
    while (left <= right) {
        middle = left + Math.floor((right - left) / 2);

        if (sortedArr[middle] === target) return middle;
        else if (target > sortedArr[middle]) left = middle + 1;
        else right = middle - 1;
    }
    
    return -1;
}

module.exports = { binarySearch }