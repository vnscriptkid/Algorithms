const {MinHeap} = require('./index');

test('it works', () => {
    const minHeap = new MinHeap([2, 7, 6, 10, 15, 17, 12]);

    expect(minHeap.getMin()).toEqual(2);
    expect(minHeap.leftChild(0)).toEqual(1);
    expect(minHeap.rightChild(2)).toEqual(6);
    expect(minHeap.parent(5)).toEqual(2);
    expect(minHeap.parent(6)).toEqual(2);

    minHeap.insert(3);

    expect(minHeap.data).toEqual([2, 3, 6, 7, 15, 17, 12, 10])

    expect(minHeap.popMin()).toEqual(2);
});