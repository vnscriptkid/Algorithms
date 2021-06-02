const {binarySearch} = require('./index');

test('it works in case found with total 5 numbers', () => {
    const arr = [1, 3, 4, 7, 9];
    const target = 3;
    expect(binarySearch(arr, target)).toEqual(1);
})

test('it works in case not found with total 5 numbers', () => {
    const arr = [1, 3, 4, 7, 9];
    const target = 5;
    expect(binarySearch(arr, target)).toEqual(-1);
})

test('it works in case found with total 6 numbers', () => {
    const arr = [1, 3, 4, 7, 9, 10];
    const target = 9;
    expect(binarySearch(arr, target)).toEqual(4);
})

test('it works in case not found with total 6 numbers', () => {
    const arr = [1, 3, 4, 7, 9, 10];
    const target = 8;
    expect(binarySearch(arr, target)).toEqual(-1);
})

test('it works in case found with total 1 numbers', () => {
    const arr = [-1];
    const target = -1;
    expect(binarySearch(arr, target)).toEqual(0);
})

test('it works in case found with total 2 numbers', () => {
    const arr = [-1, 8];
    const target = 8;
    expect(binarySearch(arr, target)).toEqual(1);
})