const {rightShift} = require('./index')
const {LinkedList} = require('./Node')

test('getLast of LL works', () => {
    const ll = new LinkedList();

    ll.addLast(1)
    ll.addLast(2)

    expect(ll.getLast().data).toEqual(2);
})

test('it works', () => {
    const ll = new LinkedList();

    ll.addLast(1)
    ll.addLast(2)
    ll.addLast(3)
    ll.addLast(4)
    ll.addLast(5)

    rightShift(ll, 2);

    expect(ll.size()).toEqual(5);

    expect(ll.head.data).toEqual(4);
    expect(ll.head.next.data).toEqual(5);
    expect(ll.head.next.next.data).toEqual(1);
    expect(ll.head.next.next.next.data).toEqual(2);
    expect(ll.head.next.next.next.next.data).toEqual(3);
    expect(ll.head.next.next.next.next.next).toEqual(null);
});