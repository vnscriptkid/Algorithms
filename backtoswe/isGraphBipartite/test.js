const {isBipartite} = require('./index');

test('isBipartite() return false', () => {
    const graph = [[1,2,3],[0,2],[0,1,3],[0,2]];

    const result = isBipartite(graph);

    expect(result).toEqual(false);
})

test('isBipartite() return true', () => {
    const graph = [[1,3],[0,2],[1,3],[0,2]]

    const result = isBipartite(graph);

    expect(result).toEqual(true);
})