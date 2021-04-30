const { find } = require('./index')

describe('Adapting search', () => {
    test('find and return the lowest index', () => {
        inputArr = [1, 3, 4, 4, 8, 10, 15, 16, 20]

        result = find(inputArr, 4);

        expect(result).toEqual(2);
    })

    test('can not find k then return null', () => {
        inputArr = [1, 3, 4, 7, 8]

        result = find(inputArr, 6);

        expect(result).toEqual(null);
    })
})