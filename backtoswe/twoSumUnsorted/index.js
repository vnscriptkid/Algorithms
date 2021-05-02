function twoSumUnsorted(arr, target) {
    const result = [];
    const expect = {}

    arr.forEach((num, index) => {
        let matchedNumber = target - num;

        if (isNaN(expect[num])) {
            expect[matchedNumber] = index;
        } else {
            result.push([ expect[num], index ]);
        }
    });

    return result;
}

module.exports = { twoSumUnsorted }