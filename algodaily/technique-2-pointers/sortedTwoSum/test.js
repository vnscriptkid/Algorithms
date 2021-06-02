const {twoSum} = require('./index');

test('it works in case found', () => {
    const sortedArr = [1,2,4,6,7,9];
    const target = 8;
    const result = twoSum(sortedArr, target);
    expect(result).toEqual(true);
})

test('it works in case not found', () => {
    const sortedArr = [1,2,4,6,7,9];
    const target = 12;
    const result = twoSum(sortedArr, target);
    expect(result).toEqual(false);
})