const {generatePowerset} = require('./index')

test('it works', () => {
    const result = generatePowerset([1,2,3]);
    expect(result).toEqual([
        [1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []
    ]);

});