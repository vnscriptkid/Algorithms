const {swapPointers, swapValues} = require('./index')
const {LinkedList} = require('./Node')

test('swapValues works when # of elements is odd', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addLast(5);

    swapValues(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next.data).toEqual(4)
    expect(ll.getHead().next.next.next.data).toEqual(3)
    expect(ll.getHead().next.next.next.next.data).toEqual(5)
    expect(ll.getHead().next.next.next.next.next).toEqual(null)
});

test('swapValues works when # of elements is even', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);

    swapValues(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next.data).toEqual(4)
    expect(ll.getHead().next.next.next.data).toEqual(3)
    expect(ll.getHead().next.next.next.next).toEqual(null)
});

test('swapValues works when # of elements is 1', () => {
    const ll = new LinkedList();
    ll.addLast(1);

    swapValues(ll);

    expect(ll.getHead().data).toEqual(1)
});

test('swapValues works when # of elements is 2', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);

    swapValues(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next).toEqual(null)
});

test('swapValues works when ll is empty', () => {
    const ll = new LinkedList();

    swapValues(ll);

    expect(ll.size()).toEqual(0)
});

test('swapPointers works when # of elements is odd', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addLast(5);

    swapPointers(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next.data).toEqual(4)
    expect(ll.getHead().next.next.next.data).toEqual(3)
    expect(ll.getHead().next.next.next.next.data).toEqual(5)
    expect(ll.getHead().next.next.next.next.next).toEqual(null)
});

test('swapPointers works when # of elements is even', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);

    swapPointers(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next.data).toEqual(4)
    expect(ll.getHead().next.next.next.data).toEqual(3)
    expect(ll.getHead().next.next.next.next).toEqual(null)
});

test('swapPointers works when # of elements is 1', () => {
    const ll = new LinkedList();
    ll.addLast(1);

    swapPointers(ll);

    expect(ll.getHead().data).toEqual(1)
});

test('swapPointers works when # of elements is 2', () => {
    const ll = new LinkedList();
    ll.addLast(1);
    ll.addLast(2);

    swapPointers(ll);

    expect(ll.getHead().data).toEqual(2)
    expect(ll.getHead().next.data).toEqual(1)
    expect(ll.getHead().next.next).toEqual(null)
});

test('swapPointers works when ll is empty', () => {
    const ll = new LinkedList();

    swapPointers(ll);

    expect(ll.size()).toEqual(0)
});


