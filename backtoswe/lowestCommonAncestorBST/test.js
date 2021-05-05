const {Node, findLowestCommonAncestor} = require('./index');

test('it works', () => {
    const node10 = new Node(10);
    const node7 = new Node(7);
    const node9 = new Node(9);
    const node15 = new Node(15);
    const node12 = new Node(12);
    const node20 = new Node(20);

    node10.left = node7;
    node7.right = node9;
    node10.right = node15;
    node15.left = node12;
    node15.right = node20;

    expect(findLowestCommonAncestor(node10, 12, 20)).toEqual(node15);
    expect(findLowestCommonAncestor(node10, 7, 12)).toEqual(node10);
    expect(findLowestCommonAncestor(node10, 7, 10)).toEqual(node10);
});