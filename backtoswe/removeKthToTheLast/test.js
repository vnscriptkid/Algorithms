const {LinkedList} = require('./Node');
const {removeKtoLast} = require('./index');

test('it works with 5 nodes', () => {
    const ll = new LinkedList();
    ll.addLast(1); 
    ll.addLast(2); 
    ll.addLast(3); 
    ll.addLast(4); 
    ll.addLast(5); 

    expect(ll.size()).toEqual(5);

    removeKtoLast(ll, 2);

    expect(ll.size()).toEqual(4);
    expect(ll.head.data).toEqual(1)
    expect(ll.head.next.data).toEqual(2)
    expect(ll.head.next.next.data).toEqual(4)
    expect(ll.head.next.next.next.data).toEqual(5)
    expect(ll.head.next.next.next.next).toEqual(null)
});

test('it works when k === size - 1', () => {
    const ll = new LinkedList();
    ll.addLast(1); 
    ll.addLast(2); 
    ll.addLast(3); 
    ll.addLast(4); 
    ll.addLast(5); 

    expect(ll.size()).toEqual(5);

    removeKtoLast(ll, 4);

    expect(ll.size()).toEqual(4);
    expect(ll.head.data).toEqual(2)
    expect(ll.head.next.data).toEqual(3)
    expect(ll.head.next.next.data).toEqual(4)
    expect(ll.head.next.next.next.data).toEqual(5)
    expect(ll.head.next.next.next.next).toEqual(null)
});

test('it works with 2 nodes', () => {
    const ll = new LinkedList();
    ll.addLast(1); 
    ll.addLast(2);  

    expect(ll.size()).toEqual(2);

    removeKtoLast(ll, 1);

    expect(ll.size()).toEqual(1);
    expect(ll.head.data).toEqual(2)
    expect(ll.head.next).toEqual(null)
});

test('boundary is checked', () => {
    const ll = new LinkedList();
    ll.addLast(1); 
    ll.addLast(2);  

    expect(ll.size()).toEqual(2);

    removeKtoLast(ll, 2);

    expect(ll.size()).toEqual(2);
});

