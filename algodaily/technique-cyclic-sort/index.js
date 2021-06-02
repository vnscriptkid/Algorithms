function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function sort2(arr=[]) {
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i + 1) {
            swap(arr, i, arr[i] - 1)
        }
    }
}

function sort(arr=[]) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== i + 1) swap(arr, i, arr[i] - 1);
        else i++;
    }
}

module.exports = { sort }
