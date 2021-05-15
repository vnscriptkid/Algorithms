const {search} = require('./index');

test('it works', () => {
    const grid = [
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
    ];

    const result = search(grid, [4, 0], [0, 4]);

    expect(Array.isArray(result)).toEqual(true);
    expect(result[0]).toEqual([4, 0]);
    expect(result[result.length - 1]).toEqual([0, 4]);
})