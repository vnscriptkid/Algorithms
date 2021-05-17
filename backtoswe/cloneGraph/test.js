const {Node, cloneGraph} = require('./index');

test('it works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    node1.neighbors = [node2, node4];
    node2.neighbors = [node1, node3];
    node3.neighbors = [node2, node4];
    node4.neighbors = [node1, node3];

    const node1Cloned = cloneGraph(node1);
    expect(node1Cloned !== node1).toEqual(true);
    expect(node1Cloned.val).toEqual(1);
    expect(node1Cloned.neighbors.length).toEqual(2);
    expect(node1Cloned.neighbors[0] !== node2).toEqual(true);
    expect(node1Cloned.neighbors[0].val).toEqual(2);
    expect(node1Cloned.neighbors[1] !== node4).toEqual(true);
    expect(node1Cloned.neighbors[1].val).toEqual(4);
});