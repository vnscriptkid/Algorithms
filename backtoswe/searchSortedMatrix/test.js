const {search} = require('./index');

test('it works with 3*4 matrix', () => {
    const matrix = [
        [ 1, 3, 5, 6],
        [ 6, 7, 10, 11],
        [ 15, 17, 18, 20],
    ];

    expect(search(matrix, 3)).toEqual({x: 0, y: 1});
});

test('it works with 3*4 matrix in case target not found', () => {
    const matrix = [
        [ 1, 3, 5, 6],
        [ 6, 7, 10, 11],
        [ 15, 17, 18, 20],
    ];

    expect(search(matrix, 2)).toEqual(null);
});

test('it works with 4*4 matrix', () => {
    const matrix = [
        [ 1, 3, 5, 6],
        [ 6, 7, 10, 11],
        [ 15, 17, 18, 20],
        [ 20, 21, 25, 28],
    ];

    expect(search(matrix, 25)).toEqual({x: 3, y: 2});
});

test('it works with 4*4 matrix in case target not found', () => {
    const matrix = [
        [ 1, 3, 5, 6],
        [ 6, 7, 10, 11],
        [ 15, 17, 18, 20],
        [ 20, 21, 25, 28],
    ];

    expect(search(matrix, 26)).toEqual(null);
});