const {generateSubSets} = require('./index');

test('it works when n = 4 && k = 2', () => {
    const result = generateSubSets(4, 2);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(6);
    expect(result.includes('12')).toEqual(true);
    expect(result.includes('13')).toEqual(true);
    expect(result.includes('14')).toEqual(true);
    expect(result.includes('23')).toEqual(true);
    expect(result.includes('24')).toEqual(true);
    expect(result.includes('34')).toEqual(true);
});

test('it works when n = 4 && k = 3', () => {
    const result = generateSubSets(4, 3);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(4);
    expect(result.includes('123')).toEqual(true);
    expect(result.includes('124')).toEqual(true);
    expect(result.includes('134')).toEqual(true);
    expect(result.includes('234')).toEqual(true);
});

test('it works with large input', () => {
    const result = generateSubSets(9, 6); // 9 choose 6 => combinations

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(84);
    expect(result.includes('123456')).toEqual(true);
});