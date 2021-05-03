const {longest, longest2} = require('./index');

test('using hash map', () => {
    expect(longest('abccccdd')).toEqual(7);
    expect(longest('abccccddd')).toEqual(7);
    expect(longest('cccddd')).toEqual(5);
    expect(longest('aabb')).toEqual(4);
});

test('using set', () => {
    expect(longest2('abccccdd')).toEqual(7);
    expect(longest2('abccccddd')).toEqual(7);
    expect(longest2('cccddd')).toEqual(5);
    expect(longest2('aabb')).toEqual(4);
});