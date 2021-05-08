const {kLargestElements} = require('./index');

test('it works when k=2 and n=10', () => {
    const inputArr = [1,3,9,5,6,2,10,7,4,8];
    const result = kLargestElements(inputArr, 2);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(result.includes(10)).toEqual(true);
    expect(result.includes(9)).toEqual(true);
});

test('it works when k=2 and n=9', () => {
    const inputArr = [1,3,9,5,6,2,7,4,8];
    const result = kLargestElements(inputArr, 2);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(result.includes(8)).toEqual(true);
    expect(result.includes(9)).toEqual(true);
});

test('it works when k=6 and n=10', () => {
    const inputArr = [1,3,9,5,6,2,10,7,4,8];
    const result = kLargestElements(inputArr, 6);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(6);
    expect(result.includes(10)).toEqual(true);
    expect(result.includes(9)).toEqual(true);
    expect(result.includes(8)).toEqual(true);
    expect(result.includes(7)).toEqual(true);
    expect(result.includes(6)).toEqual(true);
    expect(result.includes(5)).toEqual(true);
});

test('it works when k=5 and n=10', () => {
    const inputArr = [1,3,9,5,6,2,10,7,4,8];
    const result = kLargestElements(inputArr, 5);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(5);
    expect(result.includes(10)).toEqual(true);
    expect(result.includes(9)).toEqual(true);
    expect(result.includes(8)).toEqual(true);
    expect(result.includes(7)).toEqual(true);
    expect(result.includes(6)).toEqual(true);
});