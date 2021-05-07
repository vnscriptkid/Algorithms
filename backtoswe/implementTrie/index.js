class TrieNode {
    constructor(value, ended=false) {
        this.value = value.toLowerCase();
        this.next = Array.from(new Array(26)).map(() => null);
        this.ended = ended;
    }
}

function charToNumber(char) {
    return char.toLowerCase().charCodeAt(0) - 97
}

function insert(root, word) {
    let cur = root;

    for (let char of word) {
        const indexOfChar = charToNumber(char);
        if (!cur.next[indexOfChar]) 
            cur.next[indexOfChar] = new TrieNode(char)
        cur = cur.next[indexOfChar];
    }
    
    cur.ended = true;
}

module.exports = { TrieNode, insert, charToNumber }
