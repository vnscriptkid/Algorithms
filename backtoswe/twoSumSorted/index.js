function twoSumSorted(arr, target) {
    const result = [];
    
    let left = 0, right = arr.length - 1;
    let currentSum = 0;

    while (left < right) {
        currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            result.push([ left, right ]);
            left++; right--;
        } else if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        }
    }

    return result;
}

module.exports = { twoSumSorted }