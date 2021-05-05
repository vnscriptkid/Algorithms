const {Queue} = require('./index');

test('it works', () => {
    const queue = new Queue();
    queue.enqueue(10);
    expect(queue.max()).toEqual(10);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    expect(queue.max()).toEqual(10);
    expect(queue.dequeue()).toEqual(10);
    expect(queue.max()).toEqual(7);
});
