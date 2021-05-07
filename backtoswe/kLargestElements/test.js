const {getKLargest} = require('./index');

test('it works', () => {
    expect(getKLargest([100, 20, 50, -1, 40, 1], 3)).toEqual([40, 100, 50]);
});