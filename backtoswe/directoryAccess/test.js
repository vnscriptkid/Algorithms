const {hasAccess, precompute} = require('./index');

test('it works', () => {
    const folders = [
        ['A', null], 
        ['B', 'A'], 
        ['C', 'B'], 
        ['F', 'B'], 
        ['D', 'C'], 
        ['E', 'C'], 
        ['G', 'F'], 
        ['H', 'F']];

    const access = ['B', 'D']
    const target = 'G'

    const result = hasAccess(access, folders, target);
    expect(result).toEqual(true);
});

test('precompute() works', () => {
    const folders = [
        ['A', null], 
        ['B', 'A'], 
        ['C', 'B'], 
    ];
    const result = precompute(folders);
    expect(result.get('A')).toEqual(null);
    expect(result.get('B')).toEqual('A');
    expect(result.get('C')).toEqual('B');
})