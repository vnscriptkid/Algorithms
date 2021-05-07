const {MaxHeap} = require('./index');

test('it works', () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(2);
    maxHeap.insert(7);
    maxHeap.insert(6);
    maxHeap.insert(10);
    maxHeap.insert(15);
    maxHeap.insert(17);
    maxHeap.insert(12);

    expect(maxHeap.popMax()).toEqual(17);
    expect(maxHeap.popMax()).toEqual(15);
});