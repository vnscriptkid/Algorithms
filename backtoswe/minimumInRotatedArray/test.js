const {findMinimum} = require('./index');

test('it works when # of items is odd and drop point is on the right', () => {
    const rotatedArray = [4,5,6,7,9,12,15,1,2]

    expect(findMinimum(rotatedArray)).toEqual(7);
});

test('it works when # of items is even and drop point is on the right', () => {
    const rotatedArray = [4,5,6,7,12,15,1,2]

    expect(findMinimum(rotatedArray)).toEqual(6);
});

test('it works when # of items is odd and drop point is on the left', () => {
    const rotatedArray = [5,1,2,3,4]

    expect(findMinimum(rotatedArray)).toEqual(1);
});

test('it works when # of items is even and drop point is on the left', () => {
    const rotatedArray = [8,9,1,2,3,4,5,6,7]

    expect(findMinimum(rotatedArray)).toEqual(2);
});