function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubble(arr) {
    let spaceToSort; // minimum is 2
    for (let i = 0; i < arr.length - 2; i++) {
        spaceToSort = arr.length - i;
        for (let j = 0; j < spaceToSort - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function bubble2(arr) {
    let spaceToSort = arr.length;

    while (spaceToSort >= 2) {
        for (let j = 0; j < spaceToSort - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        spaceToSort--;
    }
}

function insertion(arr) {
    // Assume arr[0] as sorted part
    for (let i = 1; i < arr.length; i++) {
        while (i - 1 >= 0 && arr[i] < arr[i - 1]) {
            swap(arr, i, i - 1)
            i--;
        }
    }
}

function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexOfSmallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }

        if (indexOfSmallest !== i) swap(arr, indexOfSmallest, i);
    }
}

module.exports = { bubble, bubble2, insertion, selection }