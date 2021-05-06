const {populateLevelPointers, Node} = require('./index')

test('it works with 2-level perfect tree', () => {
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node1 = new Node(1, node2, node3);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node3.next).toEqual(null);
})

test('it works with-1 level tree', () => {
    const node1 = new Node(1);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node1.left).toEqual(null);
    expect(node1.right).toEqual(null);
})


test('it works with empty tree', () => {
    const root = null;
    
    populateLevelPointers(root);
})

test('it works with 3-level perfect tree', () => {
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    const node3 = new Node(3, node6, node7);
    const node2 = new Node(2, node4, node5);
    const node1 = new Node(1, node2, node3);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node4.next).toEqual(node5);
    expect(node5.next).toEqual(node6);
    expect(node6.next).toEqual(node7);
})

test('it works with 4-level perfect tree', () => {
    const node8 = new Node(8);
    const node9 = new Node(9);
    const node10 = new Node(10);
    const node11 = new Node(11);
    const node12 = new Node(12);
    const node13 = new Node(13);
    const node14 = new Node(14);
    const node15 = new Node(15);
    const node4 = new Node(4, node8, node9);
    const node5 = new Node(5, node10, node11);
    const node6 = new Node(6, node12, node13);
    const node7 = new Node(7, node14, node15);
    const node3 = new Node(3, node6, node7);
    const node2 = new Node(2, node4, node5);
    const node1 = new Node(1, node2, node3);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node4.next).toEqual(node5);
    expect(node5.next).toEqual(node6);
    expect(node6.next).toEqual(node7);
    // level 4
    expect(node8.next).toEqual(node9);
    expect(node9.next).toEqual(node10);
    expect(node10.next).toEqual(node11);
    expect(node11.next).toEqual(node12);
    expect(node12.next).toEqual(node13);
    expect(node13.next).toEqual(node14);
    expect(node14.next).toEqual(node15);
    expect(node15.next).toEqual(null);
})

test('it works with 3-level non-perfect tree', () => {
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node7 = new Node(7);
    const node3 = new Node(3, null, node7);
    const node2 = new Node(2, node4, node5);
    const node1 = new Node(1, node2, node3);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node4.next).toEqual(node5);
    expect(node5.next).toEqual(node7);
})

test('it works with 3-level non-perfect tree 2', () => {
    const node4 = new Node(4);
    const node7 = new Node(7);
    const node3 = new Node(3, null, node7);
    const node2 = new Node(2, node4, null);
    const node1 = new Node(1, node2, node3);

    populateLevelPointers(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node4.next).toEqual(node7);
})