const {Graph} = require('./index');

test('reverseEdgesDirection() works', () => {
    const g = new Graph();

    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);

    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(1, 3);

    const newAdjList = g.reverseEdgesDirection(g.adjList);

    expect(newAdjList.get(0)).toEqual([])
    expect(newAdjList.get(1)).toEqual([0])
    expect(newAdjList.get(2)).toEqual([1])
    expect(newAdjList.get(3)).toEqual([1])
})

test('it works in case of weakly connected graph', () => {
    const g = new Graph();

    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);
    g.addVertex(4);
    
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(3, 2);
    g.addEdge(2, 4);
    g.addEdge(4, 2);
    g.addEdge(0, 3);

    const result = g.isStronglyConnected();
    expect(result).toEqual(false);
});

test('it works in case of strongly connected graph', () => {
    const g = new Graph();

    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);
    g.addVertex(4);
    
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(3, 0);
    g.addEdge(4, 2);
    g.addEdge(2, 4);

    const result = g.isStronglyConnected();
    expect(result).toEqual(true);
});