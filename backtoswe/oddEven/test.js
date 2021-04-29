const { oddEven } = require('./index')

test('divide original array into 2 parts: odd and even', () => {
    inputArr = [12, 55, 34, 89, 75, 22, 44, 13, 78]

    oddEven(inputArr)

    expect([12, 78, 34, 44, 22, 75, 13, 89, 55]).toEqual(inputArr)
});