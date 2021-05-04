const {findSunsetBuildings} = require('./index')

test('it works', () => {
    const result = findSunsetBuildings([7, 4, 8, 2, 9]);

    expect(result).toEqual([9, 8, 7]);
});