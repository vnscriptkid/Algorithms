const {sort} = require('./index');

test('it works', () => {
    const result = sort([6, 5, 3, 2, 8, 10, 9], 3);

    expect(result).toEqual([2, 3, 5, 6, 8, 9, 10]);
});

test('it works with different input', () => {
    const result = sort([10, 9, 8, 7, 4, 70, 60, 50], 4);

    expect(result).toEqual([4, 7, 8, 9, 10, 50, 60, 70]);
})