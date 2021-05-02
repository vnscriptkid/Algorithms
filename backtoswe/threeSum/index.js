function findTwoSum(arr, target) {
    const result = [];
    const expecting = {}

    arr.forEach((item, index) => {
        if (isNaN(expecting[item])) {
            expecting[target - item] = index;
        } else {
            result.push([arr[expecting[item]], item]);
        }
    }) 

    return result;
}

function threeSum(arr, target) {
    const result = [];

    arr.forEach((eliminate, eliminateIndex) => {
        if (eliminateIndex > arr.length - 3) return;

        let twoSum = target - eliminate;
        let spaceLeft = arr.slice(eliminateIndex + 1)

        for (let pair of findTwoSum(spaceLeft, twoSum)) {
            result.push([eliminate, ...pair]);
        } 
    });

    return result;
}

module.exports = { threeSum }