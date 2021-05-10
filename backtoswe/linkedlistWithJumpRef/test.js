const {Node, jumpTraversal, jumpTraversalIteratively} = require('./index');

test('jumpTraversal() works', () => {
    const nodeA = new Node('a');
    const nodeB = new Node('b');
    const nodeC = new Node('c');
    const nodeD = new Node('d');

    nodeA.jump = nodeB;
    nodeA.next = nodeB;
    nodeB.jump = nodeD;
    nodeB.next = nodeC;
    nodeC.jump = nodeB;
    nodeC.next = nodeD;

    jumpTraversal(nodeA);

    expect(nodeA.order).toEqual(0);
    expect(nodeB.order).toEqual(1);
    expect(nodeC.order).toEqual(3);
    expect(nodeD.order).toEqual(2);
});

test('jumpTraversalIteratively() works', () => {
    const nodeA = new Node('a');
    const nodeB = new Node('b');
    const nodeC = new Node('c');
    const nodeD = new Node('d');

    nodeA.jump = nodeB;
    nodeA.next = nodeB;
    nodeB.jump = nodeD;
    nodeB.next = nodeC;
    nodeC.jump = nodeB;
    nodeC.next = nodeD;

    jumpTraversalIteratively(nodeA);

    expect(nodeA.order).toEqual(0);
    expect(nodeB.order).toEqual(1);
    expect(nodeC.order).toEqual(3);
    expect(nodeD.order).toEqual(2);
});
