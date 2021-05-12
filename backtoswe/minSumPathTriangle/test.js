const {minSumPath} = require('./index')

test('it works in case triangle has 3 rows', () => {
    const triangle = [
        [ 2 ],
        [3, 9 ],
        [1, 6, 7 ]];

    const result = minSumPath(triangle);

    expect(result).toEqual(6)
});

test('it works in case triangle has 4 rows', () => {
    const triangle = [
        [ 2 ],
        [3, 7 ],
        [8, 5, 6 ],
        [6, 1, 9, 3 ]];

    const result = minSumPath(triangle);

    expect(result).toEqual(11)
});