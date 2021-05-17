const {Graph} = require('./index');

test('buildIndegMap() works', () => {
    const g = new Graph()
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');

    g.addEdge('a', 'b')
    g.addEdge('a', 'd')
    g.addEdge('b', 'c')
    g.addEdge('d', 'c')

    const indegMap = g.buildIndegMap();
    expect(indegMap.get('a')).toEqual(0);
    expect(indegMap.get('b')).toEqual(1);
    expect(indegMap.get('d')).toEqual(1);
    expect(indegMap.get('c')).toEqual(2);
});

test('removeFromIndegMap() works', () => {
    const g = new Graph()
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');

    g.addEdge('a', 'b')
    g.addEdge('a', 'd')
    g.addEdge('b', 'c')
    g.addEdge('d', 'c')

    const indegMap = g.buildIndegMap();
    g.removeFromIndegMap(indegMap, 'a');
    expect(indegMap.get('a')).toEqual(undefined);
    expect(indegMap.get('b')).toEqual(0);
    expect(indegMap.get('d')).toEqual(0);
    expect(indegMap.get('c')).toEqual(2);
})

test('topologicalSort() works', () => {
    const g = new Graph()
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');

    g.addEdge('a', 'b')
    g.addEdge('a', 'd')
    g.addEdge('b', 'c')
    g.addEdge('d', 'c')

    const sortedList = g.topologicalSort();
    expect(sortedList).toEqual([
        'a', 'b', 'd', 'c'
    ]);
})

test('topologicalSort() works with another dataset', () => {
    const g = new Graph()
    g.addVertex('0');
    g.addVertex('1');
    g.addVertex('2');
    g.addVertex('3');

    g.addEdge('3', '2')
    g.addEdge('3', '0')
    g.addEdge('2', '0')
    g.addEdge('2', '1')

    const sortedList = g.topologicalSort();
    expect(sortedList).toEqual([
        '3', '2', '0', '1'
    ]);
})