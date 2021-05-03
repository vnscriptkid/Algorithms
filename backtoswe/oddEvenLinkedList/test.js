const {Node, LinkedList} = require('./Node')
const {convert, convert2} = require('./index')

test('LinkedList and Node class', () => {
    const ll = new LinkedList();

    ll.addLast(5);
    ll.addLast(4);
    ll.addLast(9);
    ll.addLast(2);

    expect(ll.head.data).toEqual(5);
    expect(ll.head.next.data).toEqual(4);
    expect(ll.head.next.next.data).toEqual(9);
    expect(ll.head.next.next.next.data).toEqual(2);
    expect(ll.head.next.next.next.next).toEqual(null);
})

test('odd even partitioning', () => {
    const ll = new LinkedList();

    ll.addLast(5);
    ll.addLast(4);
    ll.addLast(9);
    ll.addLast(2);

    convert(ll);

    expect(ll.head.data).toEqual(5);
    expect(ll.head.next.data).toEqual(9);
    expect(ll.head.next.next.data).toEqual(4);
    expect(ll.head.next.next.next.data).toEqual(2);
    expect(ll.head.next.next.next.next).toEqual(null);
});

test('odd even partitioning 2', () => {
    const ll = new LinkedList();

    ll.addLast(5);
    ll.addLast(4);
    ll.addLast(9);
    ll.addLast(2);

    convert2(ll);

    expect(ll.head.data).toEqual(5);
    expect(ll.head.next.data).toEqual(9);
    expect(ll.head.next.next.data).toEqual(4);
    expect(ll.head.next.next.next.data).toEqual(2);
    expect(ll.head.next.next.next.next).toEqual(null);
});