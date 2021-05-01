const { rotate } = require('./index');

test('rotate 3x3 matrix 90 degree to the right correctly', () => {
    const inputMatrix = [
        [ 1, 1, 1 ],
        [ 0, 1, 0 ],
        [ 0, 1, 0 ],
    ];

    rotate(inputMatrix);

    expect(inputMatrix).toEqual([
        [ 0, 0, 1 ],
        [ 1, 1, 1 ],
        [ 0, 0, 1 ],
    ]);
});

test('rotate 4x4 matrix 90 degree to the right correctly', () => {
    const inputMatrix = [
        [ 1, 0, 0, 1 ],
        [ 0, 1, 1, 0 ],
        [ 1, 0, 0, 1 ],
        [ 0, 1, 1, 0 ],
    ];

    rotate(inputMatrix);

    expect(inputMatrix).toEqual([
        [ 0, 1, 0, 1 ],
        [ 1, 0, 1, 0 ],
        [ 1, 0, 1, 0 ],
        [ 0, 1, 0, 1 ],
    ]);
});