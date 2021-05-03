const {Node, LinkedList} = require('./Node')
const {add} = require('./index')

test('it works with 2 numbers with equal number of digits', () => {
    const ll1 = new LinkedList();
    ll1.addLast(2);
    ll1.addLast(4);
    ll1.addLast(3);

    const ll2 = new LinkedList();
    ll2.addLast(5);
    ll2.addLast(6);
    ll2.addLast(4);

    const result = add(ll1, ll2);

    expect(result.head.data).toEqual(7);
    expect(result.head.next.data).toEqual(0);
    expect(result.head.next.next.data).toEqual(8);
    expect(result.head.next.next.next).toEqual(null);
});

test('it works with 2 numbers with different number of digits', () => {
    const ll1 = new LinkedList();
    ll1.addLast(2);
    ll1.addLast(4);

    const ll2 = new LinkedList();
    ll2.addLast(9);
    ll2.addLast(7);
    ll2.addLast(5);
    ll2.addLast(1);

    const result = add(ll1, ll2);

    expect(result.head.data).toEqual(1);
    expect(result.head.next.data).toEqual(2);
    expect(result.head.next.next.data).toEqual(6);
    expect(result.head.next.next.next.data).toEqual(1);
    expect(result.head.next.next.next.next).toEqual(null);
});