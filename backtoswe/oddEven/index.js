function swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function oddEven(arr) {
    let even = 0, odd = arr.length - 1;

    while (even !== odd) {
        if (arr[even] % 2 === 1) {
            swap(arr, even, odd)
            odd--;
            continue
        } else {
            even++;
        }
    }
}

module.exports = { oddEven }