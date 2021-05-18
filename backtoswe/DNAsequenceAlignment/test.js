const {align} = require('./index');

test('it works', () => {
    const s1 = 'GAACGCTA';
    const s2 = 'GACGTTA';
    const result = align(s1, s2);
    expect(result).toEqual([
        'GAACGCTA',
        'G_ACGTTA',
    ]);
})