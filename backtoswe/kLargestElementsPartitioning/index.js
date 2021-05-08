function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function partition(arr, pivot, left, right) {
    const pivotValue = arr[pivot];

    while (left <= right) {
        if (arr[left] >= pivotValue) {
            swap(arr, left, right);
            right--;
        } else {
            left++;
        }
    }

    swap(arr, right + 1, pivot);
    return right + 1;
}

function kLargestElements(arr, k) {
    const expectedBound = arr.length - k;

    let left = 0, right = arr.length - 1;
    let pivot;

    while (left <= right) {
        pivot = right;
        right--;

        correctPivotIndex = partition(arr, pivot, left, right)

        if (correctPivotIndex === expectedBound)
            return arr.slice(correctPivotIndex);
        else if (correctPivotIndex < expectedBound) {
            left = correctPivotIndex + 1;
            right++;
        } else {
            right = correctPivotIndex - 1;
        }
    }
}

module.exports = { kLargestElements }