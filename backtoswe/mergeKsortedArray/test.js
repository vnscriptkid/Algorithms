const {Node, MinHeap, mergeKsortedArray} = require('./index')

test('it works', () => {
    // array 1
    const node1 = new Node(1);
    const node4 = new Node(4);
    const node5 = new Node(5);
    node1.next = node4;
    node4.next = node5;

    // array 2
    const anotherNode1 = new Node(1);
    const node3 = new Node(3);
    const anotherNode4 = new Node(4);
    anotherNode1.next = node3;
    node3.next = anotherNode4;

    // array 3
    const node2 = new Node(2);
    const node6 = new Node(6);
    node2.next = node6;

    const result = mergeKsortedArray([node1, anotherNode1, node2])

    expect(result).toEqual([
        node1, anotherNode1, node2, node3, node4, anotherNode4, node5, node6
    ]);
})