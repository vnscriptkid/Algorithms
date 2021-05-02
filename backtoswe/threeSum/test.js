const { threeSum } = require('./index');

test('it works', () => {
    const arrInput = [ -4, -1, 3, 4, 6, 7, 8, 9 ];

    result = threeSum(arrInput, 9);
    
    expect(result).toEqual([ [-4, 6, 7], [-4, 4, 9], [-1, 4, 6], [-1, 3, 7] ])
});