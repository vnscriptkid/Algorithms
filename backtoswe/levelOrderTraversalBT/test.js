const {levelOrderTraversal, Node} = require('./index');

test('it works', () => {
    const node3 = new Node(3);
    const node9 = new Node(9);
    const node20 = new Node(20);
    const node15 = new Node(15);
    const node7 = new Node(7);

    node3.left = node9;
    node3.right = node20;
    node20.left = node15;
    node20.right = node7;

    const result = levelOrderTraversal(node3);

    expect(result).toEqual([[3],[9,20],[15,7]]);
})