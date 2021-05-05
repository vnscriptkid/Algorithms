const {Node, findPaths} = require('./index');

test('it works', () => {
    node1 = new Node(1)
    node2 = new Node(2)
    node3 = new Node(3)
    node4 = new Node(4)
    node5 = new Node(5)

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    const result = findPaths(node1, 8)
    expect(result).toEqual([[1,2,5]]);
});

test('it works when there is only 1 node', () => {
    node5 = new Node(5)
    const result = findPaths(node5, 5)
    expect(result).toEqual([[5]]);
});

test('it works in case there are 2 paths', () => {
    node10 = new Node(10)
    node50 = new Node(50)
    node25 = new Node(25)
    node40 = new Node(40)
    node80 = new Node(80)
    node7 = new Node(7)
    node6 = new Node(6)
    node4 = new Node(4)

    node10.left = node50;
    node10.right = node80;
    node50.left = node25;
    node50.right = node40;
    node80.left = node7;
    node80.right = node6;
    node6.right = node4;
    
    const result = findPaths(node10, 100)
    expect(result).toEqual([[10, 50, 40], [10, 80, 6, 4]]);
});
