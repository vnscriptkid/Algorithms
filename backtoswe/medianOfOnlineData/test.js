const {StreamData, findMedian} = require('./index')

test('streaming data', () => {
    const stream = new StreamData([20, 50, 45, 34]);

    expect(stream.next()).toEqual(20);
    expect(stream.next()).toEqual(50);
    expect(stream.next()).toEqual(45);
    expect(stream.hasNext()).toEqual(true);
    expect(stream.next()).toEqual(34);
    expect(stream.hasNext()).toEqual(false);
    expect(stream.next()).toEqual(null);
})

test('find median with even-elements stream', () => {
    const stream = new StreamData([20, 50, 45, 34]);

    const result = findMedian(stream);

    expect(result).toEqual(39);
})

test('find median with odd-elements stream', () => {
    const stream = new StreamData([20, 50, 45, 25, 34]);

    const result = findMedian(stream);

    expect(result).toEqual(34);
})