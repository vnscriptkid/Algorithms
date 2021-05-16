class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        this.adjacencyList.set(v, [])
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2)
    }

    print() {
        const allVertices = this.adjacencyList.keys();

        for (let vertex of allVertices) {
            const connectedVertices = this.adjacencyList.get(vertex);

            let output = `${vertex} ->`;

            for (let childVertex of connectedVertices) {
                output += ` ${childVertex} `;
            }

            console.log(output);
        }
    }
}

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(val) {
        this.data.push(val);
    }

    dequeue() {
        return this.data.shift();
    }

    empty() {
        return this.data.length === 0;
    }
}

function findNeighbors(word, patterns) {
    let output = [];

    const wordPatterns = getAllPatterns(word);

    for (let wordPattern of wordPatterns) {
        output = [ ...output, ...patterns.get(wordPattern).filter(w => w !== word) ]
    }

    return output;
}

function getAllPatterns(word) {
    const output = [];
    
    for (let charIndex of word.split('').keys()) {
        output.push(word.slice(0, charIndex) + '*' + word.slice(charIndex + 1));
    }

    return output;
}

function processWords(wordList, patterns) {
    for (let word of wordList) {
        wordPatterns = getAllPatterns(word);
        for (let wordPattern of wordPatterns) {
            if (!patterns.has(wordPattern)) patterns.set(wordPattern, [])
            patterns.get(wordPattern).push(word);
        }
    }
}

const LEVEL_SEPARATOR = 'x';

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    const patterns = new Map();
    const seen = new Set();
    const queue = new Queue();

    queue.enqueue(LEVEL_SEPARATOR);
    queue.enqueue(beginWord);
    let curWord = null;
    let count = 0;
    seen.add(beginWord);

    processWords([beginWord, ...wordList], patterns);

    while (!queue.empty()) {
        curWord = queue.dequeue();

        if (curWord === LEVEL_SEPARATOR && !queue.empty()) {
            queue.enqueue(LEVEL_SEPARATOR)
            count++;
            continue;
        }

        const neighbors = findNeighbors(curWord, patterns);

        for (let neighbor of neighbors) {
            if (neighbor === endWord) return count + 1;
            if(!seen.has(neighbor)) {
                queue.enqueue(neighbor);
                seen.add(neighbor);
            }
        }
    }

    return 0;
}

module.exports = { ladderLength, getAllPatterns, processWords, findNeighbors }