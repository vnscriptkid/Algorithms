const { isPalindromeNubmer, countDigits } = require('./index')

test('correctly count the number of digits of number', () => {
    expect(countDigits(0)).toEqual(1);
    expect(countDigits(5)).toEqual(1);
    expect(countDigits(10)).toEqual(2);
    expect(countDigits(99)).toEqual(2);
    expect(countDigits(100)).toEqual(3);
});

test('correctly check if a number is palindrome', () => {
    expect(isPalindromeNubmer(-1)).toEqual(false);
    expect(isPalindromeNubmer(12)).toEqual(false);
    expect(isPalindromeNubmer(123)).toEqual(false);
    expect(isPalindromeNubmer(1231)).toEqual(false);
    expect(isPalindromeNubmer(12341)).toEqual(false);

    expect(isPalindromeNubmer(5)).toEqual(true);
    expect(isPalindromeNubmer(22)).toEqual(true);
    expect(isPalindromeNubmer(121)).toEqual(true);
    expect(isPalindromeNubmer(1221)).toEqual(true);
    expect(isPalindromeNubmer(12321)).toEqual(true);
});
