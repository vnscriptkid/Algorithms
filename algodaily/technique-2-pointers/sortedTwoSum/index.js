function twoSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    let sum=0;
    while (left < right) {
        sum = sortedArr[left] + sortedArr[right];

        if (sum === target) return true;
        else if (sum > target) right--;
        else left++;
    }
    
    return false;
}

module.exports = { twoSum }