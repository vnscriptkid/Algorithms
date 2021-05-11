const {generate} = require('./index');

test('it works when n = 1', () => {
    const result = generate(1);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(1);
    expect(result.includes('()')).toEqual(true);
}) 

test('it works when n = 2', () => {
    const result = generate(2);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(result.includes('(())')).toEqual(true);
    expect(result.includes('()()')).toEqual(true);
}) 

test('it works when n = 3', () => {
    const result = generate(3);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(5);
    expect(result.includes('(())()')).toEqual(true);
    expect(result.includes('()(())')).toEqual(true);
    expect(result.includes('()()()')).toEqual(true);
    expect(result.includes('((()))')).toEqual(true);
    expect(result.includes('(()())')).toEqual(true);
}) 