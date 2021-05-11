const {Chessboard, Coord} = require('./index')

test('it works', () => {
    const board = new Chessboard(4);

    const result = board.nQueens();

    expect(result).toEqual([
        [new Coord(0, 1), new Coord(1, 3), new Coord(2, 0), new Coord(3, 2)],
        [new Coord(0, 2), new Coord(1, 0), new Coord(2, 3), new Coord(3, 1)],
    ]);
});
