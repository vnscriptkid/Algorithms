const {partition, sort} = require('./index');

test('partition() works', () => {
    const inputArr = [9,6,7,8,1,4,2,5,3];
    const pivot = partition(inputArr, 0, inputArr.length - 1)
    expect(pivot).toEqual(2);
    expect(inputArr[pivot]).toEqual(3);
});

test('sort() works', () => {
    const arr = [9,6,7,8,1,4,2,5,3];
    sort(arr);
    console.log(arr);
    expect(arr).toEqual([1,2,3,4,5,6,7,8,9]);
})