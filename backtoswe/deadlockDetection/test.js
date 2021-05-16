const {Graph} = require('./index');

test('Graph works', () => {
    var graph = new Graph();
    var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
    
    // adding vertices
    for (var i = 0; i < vertices.length; i++) {
        graph.addVertex(vertices[i]);
    }
    
    // adding edges
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'C');
    graph.addEdge('C', 'F');

});

test('graphHaveCycle() works', () => {
    var graph = new Graph();
    var vertices = [ '1', '2', '3', '4', '5', '6' ];
    
    // adding vertices
    for (let vertex of vertices) {
        graph.addVertex(vertex);
    }

    graph.addEdge('1', '2');
    graph.addEdge('1', '3');
    graph.addEdge('3', '4');
    graph.addEdge('3', '5');
    graph.addEdge('5', '6');
    graph.addEdge('6', '3');

    const result = graph.hasCycle();

    expect(result).toEqual(true);
})