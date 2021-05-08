const {findNearestRepeatedEntries} = require('./index');

test('it works', () => {
    const inputArr = ['this', 'knife', 'is', 'a', 'is', 'long', 'short', 'short', 'him', 'that']

    const result = findNearestRepeatedEntries(inputArr);

    expect(result).toEqual({ first: 6, second: 7, value: 'short' })
});
