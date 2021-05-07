const {TrieNode, insert, charToNumber} = require('./index');

test('it works', () => {
    const root = new TrieNode('#');
    insert(root, 'boy')

    let b = root.next[charToNumber('b')];
    let bo = b.next[charToNumber('o')];
    let boy = bo.next[charToNumber('y')];
    expect(b.value).toEqual('b');
    expect(bo.value).toEqual('o');
    expect(bo.ended).toEqual(false);
    expect(boy.value).toEqual('y');
    expect(boy.ended).toEqual(true);

    insert(root, 'boyce')
    // new word should not wipe out old word
    b = root.next[charToNumber('b')];
    bo = b.next[charToNumber('o')];
    boy = bo.next[charToNumber('y')];
    expect(boy.ended).toEqual(true);

    boyc = boy.next[charToNumber('c')];
    boyce = boyc.next[charToNumber('e')];
    expect(boyce.ended).toEqual(true);
});