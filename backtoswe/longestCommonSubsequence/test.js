const {lcs} = require('./index');

test('it works 1', () => {
    const s1 = 'ABCDGH';
    const s2 = 'AEDFHR';

    expect(lcs(s1, s2)).toEqual(3);
});

test('it works 2', () => {
    const s1 = 'AGGTAB';
    const s2 = 'GXTXAYB';

    expect(lcs(s1, s2)).toEqual(4);
});