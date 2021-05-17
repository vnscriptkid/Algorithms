class Node {
    constructor(val, neighbors=[]) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
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

function cloneGraph(node) {
    // build mapping real node vs cloned node using bfs
    const queue = new Queue();
    queue.enqueue(node);
    const seen = new Set()
    seen.add(node);

    let curNode = null;
    let clonedNode = null;
    const mapping = new Map();

    while (!queue.empty()) {
        curNode = queue.dequeue();
        clonedNode = new Node(curNode.val);

        mapping.set(curNode, clonedNode);
        for (let neighbor of curNode.neighbors) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                queue.enqueue(neighbor);
            }
        }
    }

    // build graph with vertices and edges
    for (let [node, clonedNode] of mapping.entries()) {
        clonedNode.neighbors = node.neighbors.map(realNode => mapping.get(realNode))
    }

    return mapping.get(node);

}

module.exports = { Node, cloneGraph }