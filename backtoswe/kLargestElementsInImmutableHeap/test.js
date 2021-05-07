const {getKLargestFromHeap, MaxHeap} = require('./index')

test('it works', () => {
    const givenHeap = new MaxHeap({
        data: [17, 7, 16, 2, 3, 15, 14],
        immutable: true
    })

    const result = getKLargestFromHeap(givenHeap, 4);

    expect(result).toEqual([17, 16, 15, 14]);
}); 

test('it works with different k', () => {
    const givenHeap = new MaxHeap({
        data: [17, 7, 16, 2, 3, 15, 14],
        immutable: true
    })

    const result = getKLargestFromHeap(givenHeap, 5);

    expect(result).toEqual([17, 16, 15, 14, 7]);
}); 
