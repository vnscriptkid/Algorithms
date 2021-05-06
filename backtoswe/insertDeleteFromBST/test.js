const {insertNode, deleteNode, Node} = require('./index')

test('insertNode works', () => {
    const node10 = new Node(10);
    const node11 = new Node(11);
    const node5 = new Node(5);
    const node4 = new Node(4);
    const node6 = new Node(6);

    node10.right = node11;
    node10.left = node5;
    node5.left = node4;
    node5.right = node6

    insertNode(node10, 7);

    expect(node6.right.value).toEqual(7);
});

test('deleteNode works if delete leaf node', () => {
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);

    node5.right = node6;
    node6.right = node7;

    deleteNode(node5, 7);

    expect(node6.right).toEqual(null);
    expect(node6.left).toEqual(null);
    expect(node5.left).toEqual(null);
    expect(node5.right).toEqual(node6);
});

test('deleteNode works if delete node that has no left child', () => {
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);

    node5.right = node6;
    node6.right = node7;

    deleteNode(node5, 6);

    expect(node5.left).toEqual(null);
    expect(node5.right).toEqual(node7);
    expect(node7.right).toEqual(null);
    expect(node7.left).toEqual(null);
});

test('deleteNode works in case of deleting node that has no right child', () => {
    const node5 = new Node(5);
    const node4 = new Node(4);
    const node3 = new Node(3);

    node5.left = node4;
    node4.left = node3;

    deleteNode(node5, 4);

    expect(node5.right).toEqual(null);
    expect(node5.left).toEqual(node3);
    expect(node3.right).toEqual(null);
    expect(node3.left).toEqual(null);
});

test('deleteNode works in case of deleting node that has both left and right child', () => {
    const node5 = new Node(5);
    const node7 = new Node(7);
    const node6 = new Node(6);
    const node10 = new Node(10);
    const node15 = new Node(15);
    const node20 = new Node(20);

    node5.right = node15;
    node15.right = node20;
    node15.left = node10;
    node10.left = node7;
    node7.left = node6;

    deleteNode(node5, 15);

    expect(node5.right).toEqual(node6);
    expect(node5.left).toEqual(null);
    expect(node6.right).toEqual(node20);
    expect(node6.left).toEqual(node10);
    expect(node10.left).toEqual(node7);
    expect(node7.left).toEqual(null);

});
