const {Node, LinkedList} = require('./Node')
const {reverseSublist} = require('./index')

test('it works when sublist stays within linkedlist', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addLast(5);

    reverseSublist(ll, 1, 3);

    expect(ll.getHead().data).toEqual(1);
    expect(ll.getHead().next.data).toEqual(4);
    expect(ll.getHead().next.next.data).toEqual(3);
    expect(ll.getHead().next.next.next.data).toEqual(2);
    expect(ll.getHead().next.next.next.next.data).toEqual(5);
    expect(ll.getHead().next.next.next.next.next).toEqual(null);
});

test('it works when sublist start from 0 to n - 1', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addLast(5);

    reverseSublist(ll, 0, 4);

    expect(ll.getHead().data).toEqual(5);
    expect(ll.getHead().next.data).toEqual(4);
    expect(ll.getHead().next.next.data).toEqual(3);
    expect(ll.getHead().next.next.next.data).toEqual(2);
    expect(ll.getHead().next.next.next.next.data).toEqual(1);
    expect(ll.getHead().next.next.next.next.next).toEqual(null);
});