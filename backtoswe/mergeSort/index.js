function sort(arr) {
    if (arr.length === 1) return arr;

    const middle = Math.floor((arr.length - 1) / 2);

    const sortedLeft = sort(arr.slice(0, middle + 1));
    const sortedRight = sort(arr.slice(middle + 1));

    return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
    const merged = [];
    let arrWithSmallerHead;

    while (arr1.length && arr2.length) {
        arrWithSmallerHead = arr1[0] < arr2[0] ? arr1 : arr2;
        merged.push(arrWithSmallerHead[0]);
        arrWithSmallerHead.shift();
    }

    return [...merged, ...arr1, ...arr2];
}

module.exports = { sort, merge }