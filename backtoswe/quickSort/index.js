function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, left, right) {
    let pivot = right;
    let i = left, j = pivot - 1;

    while (i <= j) {
        if (arr[i] <= arr[pivot]) i++;
        else {
            swap(arr, i, j);
            j--;
        }
    }

    swap(arr, pivot, j + 1);

    return j + 1;
}

function _sort(arr, left, right) {
    if (left < right) {
        const pivot = partition(arr, left, right);
    
        _sort(arr, left, pivot - 1)
        _sort(arr, pivot + 1, right);
    }
}

function sort(arr) {
    _sort(arr, 0, arr.length - 1)
}

module.exports = {sort, partition}