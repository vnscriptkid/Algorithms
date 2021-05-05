const {Node, buildMinBST} = require('./index');

test('it works in case the number of nodes is odd', () => {
    inputArr = [-2, 0, 1, 5, 6, 7, 12];
    const root = buildMinBST(inputArr);

    expect(root.value).toEqual(5);
    expect(root.left.value).toEqual(0);
    expect(root.right.value).toEqual(7);
    expect(root.left.left.value).toEqual(-2);
    expect(root.left.right.value).toEqual(1);
    expect(root.right.left.value).toEqual(6);
    expect(root.right.right.value).toEqual(12);
});

test('it works in case the number of nodes is even', () => {
    inputArr = [-2, 0, 1, 5, 6, 7, 12, 13];
    const root = buildMinBST(inputArr);

    expect(root.value).toEqual(5);
    expect(root.left.value).toEqual(0);
    expect(root.right.value).toEqual(7);
    expect(root.left.left.value).toEqual(-2);
    expect(root.left.right.value).toEqual(1);
    expect(root.right.left.value).toEqual(6);
    expect(root.right.right.value).toEqual(12);
    expect(root.right.right.right.value).toEqual(13);
});
