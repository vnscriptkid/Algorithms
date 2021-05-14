const {visitRooms} = require('./index');

test('it works', () => {
    const rooms = [[1],[2],[3],[]];
    const result = visitRooms(rooms);
    expect(result).toEqual(true);
})

test('it still works', () => {
    const rooms = [[1,3],[3,0,1],[2],[0]]
    const result = visitRooms(rooms);
    expect(result).toEqual(false);
})
