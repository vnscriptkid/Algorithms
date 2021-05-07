const {Node, findSuccessor} = require('./index');

test('it works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);

    node6.left = node2;
    node6.right = node7;
    node2.left = node1;
    node2.right = node4;
    node4.left = node3;
    node4.right = node5;

    node2.parent = node7.parent = node6;
    node1.parent = node4.parent = node2;
    node3.parent = node5.parent = node4;

    // no right side, is left child
    expect(findSuccessor(node1)).toEqual(node2);
    // no right side, is right child
    expect(findSuccessor(node5)).toEqual(node6);
    // has right side, is right child
    expect(findSuccessor(node4)).toEqual(node5);
    expect(findSuccessor(node2)).toEqual(node3);
    expect(findSuccessor(node6)).toEqual(node7);
    // edge case: no right side, is right child, no successor
    expect(findSuccessor(node7)).toEqual(null);
});