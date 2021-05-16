const {ladderLength, getAllPatterns, processWords, findNeighbors} = require('./index');

test('getAllPatterns() works', () => {
    const result = getAllPatterns('abc');
    expect(result).toEqual([
        '*bc', 'a*c', 'ab*'
    ]);
});

test('processWords() works', () => {
    const patterns = new Map();
    processWords([
        'hit', 'hot'
    ], patterns);
    expect(patterns.get('*it')).toEqual(['hit']);
    expect(patterns.get('h*t')).toEqual(['hit', 'hot']);
    expect(patterns.get('hi*')).toEqual(['hit']);
    expect(patterns.get('*ot')).toEqual(['hot']);
    expect(patterns.get('ho*')).toEqual(['hot']);
});

test('findNeighbors() works', () => {
    const patterns = new Map();
    processWords([
        'hit', 'hot', 'dot', 'lot'
    ], patterns);
    const hitResult = findNeighbors('hit', patterns);
    expect(hitResult).toEqual(['hot'])

    const hotResult = findNeighbors('hot', patterns);
    expect(hotResult).toEqual(['dot', 'lot', 'hit'])

    const dotResult = findNeighbors('dot', patterns);
    expect(dotResult).toEqual(['hot', 'lot'])

    const lotResult = findNeighbors('lot', patterns);
    expect(lotResult).toEqual(['hot', 'dot'])
})

test('ladderLength() works', () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot","dot","dog","lot","log","cog"];

    const result = ladderLength(beginWord, endWord, wordList);

    expect(result).toEqual(5);
});

test('ladderLength() works with 2nd data set', () => {
    const beginWord = "TOON";
    const endWord = "PLEA";
    const wordList = ['POON', 'PLEE', 'SAME', 'POIE', 'PLEA', 'PLIE', 'POIN'];

    const result = ladderLength(beginWord, endWord, wordList);

    expect(result).toEqual(7);
});

test('ladderLength() works with 3rd data set', () => {
    const beginWord = "ABCV";
    const endWord = "EBAD";
    const wordList = ['ABCD', 'EBAD', 'EBCD', 'XYZA'];

    const result = ladderLength(beginWord, endWord, wordList);

    expect(result).toEqual(4);
});

test('ladderLength() works when endword is not included in wordList', () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot","dot","dog","lot","log"];

    const result = ladderLength(beginWord, endWord, wordList);

    expect(result).toEqual(0);
})