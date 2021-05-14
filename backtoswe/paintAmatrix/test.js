const {paint, getConnectedPoints, Point} = require('./index');

test('it works', () => {
    const image = [[1,1,1],[1,1,0],[1,0,1]]
    const sr = 1, sc = 1, newColor = 2;

    paint(image, sr, sc, newColor);

    expect(image).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
});

test('getConnectedPoints() works', () => {
    const image = [
        [1,1,1],
        [1,1,0],
        [1,0,0]]
    const x = 2, y = 2, oldColor = 0;

    const result = getConnectedPoints(image, new Point(x, y), oldColor)

    expect(result).toEqual([ new Point(1, 2), new Point(2, 1) ]);   
})