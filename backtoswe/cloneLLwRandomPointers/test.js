const {Node, LinkedList} = require('./Node');
const {clone} = require('./index');

test('it works', () => {
    const ll = new LinkedList();
    const node4 = new Node(4);
    const node3 = new Node(3, node4);
    const node2 = new Node(2, node3);
    const node1 = new Node(1, node2);
    ll.head = node1;

    // set random pointers
    node1.random = node3;
    node2.random = node4;
    node3.random = node1;

    const cloned = clone(ll);

    expect(cloned instanceof LinkedList).toEqual(true);

    const node1Cloned = cloned.getHead();
    const node2Cloned = node1Cloned.next;
    const node3Cloned = node2Cloned.next;
    const node4Cloned = node3Cloned.next;

    expect(node1Cloned.data).toEqual(1);
    expect(node2Cloned.data).toEqual(2);
    expect(node3Cloned.data).toEqual(3);
    expect(node4Cloned.data).toEqual(4);
    expect(node4Cloned.next).toEqual(null);

    expect(node1Cloned.random).toEqual(node3Cloned);
    expect(node2Cloned.random).toEqual(node4Cloned);
    expect(node3Cloned.random).toEqual(node1Cloned);
    expect(node4Cloned.random).toEqual(null);
});
