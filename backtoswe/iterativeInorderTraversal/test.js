const {Node, inorderTraversal} = require('./index');

test('it works', () => {
    node4 = new Node(4);
    node2 = new Node(2);
    node6 = new Node(6);
    node1 = new Node(1);
    node3 = new Node(3);
    node5 = new Node(5);
    node7 = new Node(7);

    node4.left = node2;
    node4.right = node6;
    node2.left = node1;
    node2.right = node3;
    node6.left = node5;
    node6.right = node7;
    
    const expectedTraversing = [1,2,3,4,5,6,7]
    const result = inorderTraversal(node4);
    expect(result).toEqual(expectedTraversing);
});

test('it works when there\'s only one node', () => {
    node4 = new Node(4);
    
    const expectedTraversing = [4]
    const result = inorderTraversal(node4);
    expect(result).toEqual(expectedTraversing);
});


