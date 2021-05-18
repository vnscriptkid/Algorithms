const {lis} = require('./index');

test('it works', () => {
    const arr = [10, 9, 2, 5, 4, 7, 101, 18];
    expect(lis(arr)).toEqual(4);
})