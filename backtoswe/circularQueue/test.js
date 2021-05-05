const {CircularQueue} = require('./index');

test('it works', () => {
    queue = new CircularQueue();
    expect(queue.CAPACITY).toEqual(5);
    expect(queue.dequeue()).toEqual(null);
    expect(queue.empty()).toEqual(true);
    expect(queue.data).toEqual([])
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    expect(queue.data).toEqual([1,2,3,4,5])
    expect(queue.head).toEqual(0)
    expect(queue.tail).toEqual(4)

    expect(() => {
        queue.enqueue(6);
    }).toThrow('Queue is full')

    dequeuedValue1 = queue.dequeue()
    dequeuedValue2 = queue.dequeue()
    expect(dequeuedValue1).toEqual(1);
    expect(dequeuedValue2).toEqual(2);
    expect(queue.data).toEqual([undefined,undefined,3,4,5])
    
    expect(queue.data).toEqual([undefined,undefined,3,4,5])
    expect(queue.size()).toEqual(3);
    expect(queue.head).toEqual(2)
    expect(queue.tail).toEqual(4)
    queue.enqueue(6)
    expect(queue.data).toEqual([6,undefined,3,4,5])
    expect(queue.size()).toEqual(4);
    queue.enqueue(7)
    expect(queue.data).toEqual([6,7,3,4,5])

    expect(() => {
        queue.enqueue(8);
    }).toThrow('Queue is full')
    expect(queue.head).toEqual(2)
    expect(queue.getHead()).toEqual(3)
    expect(queue.tail).toEqual(1)
    expect(queue.getTail()).toEqual(7)

    expect(queue.dequeue()).toEqual(3)
    expect(queue.dequeue()).toEqual(4)
    expect(queue.dequeue()).toEqual(5)
    expect(queue.getHead()).toEqual(6)

    expect(queue.dequeue()).toEqual(6)
    expect(queue.dequeue()).toEqual(7)

    expect(queue.empty()).toEqual(true);
    expect(queue.size()).toEqual(0);
    queue.enqueue(8)
    expect(queue.getHead()).toEqual(8)
    expect(queue.getTail()).toEqual(8)
    expect(queue.size()).toEqual(1);
});