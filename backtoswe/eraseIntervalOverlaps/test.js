const {eraseOverlaps} = require('./index');

test('it works 1', () => {
    const intervals = [[1,2],[2,3],[3,4],[1,3]];
    const result = eraseOverlaps(intervals);
    expect(result).toEqual(1);
});

test('it works 2', () => {
    const intervals = [[1,2],[1,2],[1,2]]
    const result = eraseOverlaps(intervals);
    expect(result).toEqual(2);
});

test('it works 3', () => {
    const intervals = [[1,2],[2,3]];
    const result = eraseOverlaps(intervals);
    expect(result).toEqual(0);
});
