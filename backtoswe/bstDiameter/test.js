const {Node, longestDiameter} = require('./index');

test('it works', () => {
    node1 = new Node(1);
    node2 = new Node(2);
    node3 = new Node(3);
    node4 = new Node(4);
    node5 = new Node(5);
    node6 = new Node(6);
    node7 = new Node(7);
    node8 = new Node(8);
    node9 = new Node(9);
    node10 = new Node(10);
    node11 = new Node(11);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node4.left = node5;
    node5.right = node6;
    node6.left = node7;
    node2.right = node8;
    node8.left = node9;
    node9.right = node10;
    node10.left = node11;

    expect(longestDiameter(node1)).toEqual(8);
});
