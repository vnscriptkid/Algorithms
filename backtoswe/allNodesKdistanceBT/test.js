const {Node, findNodesKdistance, buildMappingNodeToParent, findNode} = require('./index');

test('buildMappingNodeToParent() works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.left = node2;
    node1.right = node3;

    const mapping = buildMappingNodeToParent(node1);
    expect(mapping.size).toEqual(2);
});

test('findNode() works', () => {
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node1 = new Node(1, node2, node3);

    const foundNode = findNode(node1, 3);
    expect(foundNode).toEqual(node3);
})

test('findNode() works in case not found', () => {
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node1 = new Node(1, node2, node3);

    const foundNode = findNode(node1, 4);
    expect(foundNode).toEqual(null);
})

test('it works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    const node8 = new Node(8);
    const node9 = new Node(9);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node6;
    node5.right = node7;
    node3.right = node8;
    node8.left = node9;

    const result = findNodesKdistance(node1, 2, 2);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(3);
    expect(result.includes(node3)).toEqual(true);
    expect(result.includes(node6)).toEqual(true);
    expect(result.includes(node7)).toEqual(true);
});