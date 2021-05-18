const {subarraySum} = require('./index');

test('it works', () => {
    const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

    expect(subarraySum(arr)).toEqual(6);
});