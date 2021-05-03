const {Node, LinkedList} = require('./Node');
const {findOverlap, findOverlap2} = require('./index');

test('it works using set', () => {
    // Init
    node0 = new Node(0);
    node1 = new Node(1);
    node2 = new Node(2);
    node5 = new Node(5);
    node3 = new Node(3);
    node6 = new Node(6);
    node7 = new Node(7);

    node0.next = node1;
    node1.next = node2;
    node2.next = node3;

    node5.next = node3;
    node3.next = node6;
    node6.next = node7;

    // test
    expect(findOverlap(node0, node5)).toEqual(node3);
});

test('it works using pointer', () => {
    // Init
    node0 = new Node(0);
    node1 = new Node(1);
    node2 = new Node(2);
    node5 = new Node(5);
    node3 = new Node(3);
    node6 = new Node(6);
    node7 = new Node(7);

    node0.next = node1;
    node1.next = node2;
    node2.next = node3;

    node5.next = node3;
    node3.next = node6;
    node6.next = node7;

    // test
    expect(findOverlap2(node0, node5)).toEqual(node3);
});

test('size of linked list', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    expect(ll.size()).toEqual(2);
})