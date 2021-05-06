const {Node, isBalanced} = require('./index');

test('it works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.right = node6;
    node6.left = node7;

    expect(isBalanced(node1)).toEqual(false);
});