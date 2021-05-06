const {buildTree} = require('./index');

test('it works', () => {
    preOrder = [3, 9, 20, 15, 7];
    inOrder = [9, 3, 15, 20, 7];

    root = buildTree(preOrder, inOrder);

    expect(root.value).toEqual(3);
    expect(root.left.value).toEqual(9);
    expect(root.right.value).toEqual(20);
    expect(root.right.left.value).toEqual(15);
    expect(root.right.right.value).toEqual(7);
});

test('it works when there\' no left node', () => {
    preOrder = [3, 20, 15, 7];
    inOrder = [3, 15, 20, 7];

    root = buildTree(preOrder, inOrder);

    expect(root.value).toEqual(3);
    expect(root.right.value).toEqual(20);
    expect(root.right.left.value).toEqual(15);
    expect(root.right.right.value).toEqual(7);
});