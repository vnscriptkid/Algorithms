const {editDistance} = require('./index');

test('it works', () => {
    expect(editDistance('horse', 'ros')).toEqual(3)
});