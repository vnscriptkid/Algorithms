const {bubble, bubble2, insertion, selection} = require('./index');

test('bubble using 2 for', () => {
    const arr = [5,4,3,1,2];
    bubble(arr)
    expect(arr).toEqual([1,2,3,4,5]);
});

test('bubble using while and for', () => {
    const arr = [5,4,3,1,2];
    bubble2(arr)
    expect(arr).toEqual([1,2,3,4,5]);
});

test('insertion', () => {
    const arr = [5,4,3,1,2,6,8,7,9,10];
    insertion(arr)
    expect(arr).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('selection', () => {
    const arr = [5,4,3,1,2];
    selection(arr)
    expect(arr).toEqual([1,2,3,4,5]);
});