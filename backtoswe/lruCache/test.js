const {LruCache, Node} = require('./index');

test('it works', () => {
    const cache = new LruCache(3);
    expect(cache.empty()).toEqual(true);
    
    cache.put(1, 'a')
    expect(cache.empty()).toEqual(false);
    expect(cache.size()).toEqual(1);

    cache.put(2, 'b')
    expect(cache.size()).toEqual(2);

    cache.put(3, 'c')
    expect(cache.size()).toEqual(3);

    expect(cache.head.next.key).toEqual(3);
    expect(cache.head.next.value).toEqual('c');

    expect(cache.tail.prev.key).toEqual(1);
    expect(cache.tail.prev.value).toEqual('a');

    // put an existing key
    cache.put(1, 'a')
    expect(cache.head.next.key).toEqual(1);
    expect(cache.head.next.value).toEqual('a');

    expect(cache.tail.prev.key).toEqual(2);
    expect(cache.tail.prev.value).toEqual('b');

    // get 'b'
    const nodeB = cache.get(2);
    expect(nodeB.value).toEqual('b');

    expect(cache.head.next).toEqual(nodeB);
    expect(nodeB.next.value).toEqual('a');

    // put a new key
    cache.put(4, 'd')
    expect(cache.head.next.key).toEqual(4);
    expect(cache.head.next.value).toEqual('d');

    expect(cache.head.next.next.key).toEqual(2);
    expect(cache.head.next.next.value).toEqual('b');

    expect(cache.tail.prev.key).toEqual(1);
    expect(cache.tail.prev.value).toEqual('a');

    expect(cache.tail.prev.prev.key).toEqual(2);
    expect(cache.tail.prev.prev.value).toEqual('b');
});