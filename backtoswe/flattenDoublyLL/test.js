const {Node} = require('./Node');
const {flatten} = require('./index');

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
    node12 = new Node(12);

    node1.setup({next: node2})
    node2.setup({next: node3, prev: node1})
    node3.setup({next: node4, prev: node2, child: node7});
    node4.setup({next: node5, prev: node3})
    node5.setup({next: node6, prev: node4})
    node6.setup({prev: node5})

    node7.setup({next: node8})
    node8.setup({next: node9, prev: node7, child: node11})
    node9.setup({next: node10, prev: node8})
    node10.setup({prev: node9})
    
    node11.setup({next: node12})
    node12.setup({prev: node11})

    flatten(node1);

    expect(node1.next).toEqual(node2);
    expect(node2.next).toEqual(node3);
    expect(node3.next).toEqual(node7);
    expect(node7.next).toEqual(node8);
    expect(node8.next).toEqual(node11);
    expect(node11.next).toEqual(node12);
    expect(node12.next).toEqual(node9);
    expect(node9.next).toEqual(node10);
    expect(node10.next).toEqual(node4);
    expect(node4.next).toEqual(node5);
    expect(node5.next).toEqual(node6);
    expect(node6.next).toEqual(null);
});