class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.push(value);
    }

    dequeue() {
        return this.data.shift();
    }

    empty() {
        return this.data.length === 0;
    }
}

function isBipartite(graph) {
    // init queue to do BFS
    const queue = new Queue();
    queue.enqueue(0);
    // init cache to remember which side is one node in
    const sideOf = {
        0: true
    }; // true or false

    let nextNode;

    while (!queue.empty()) {
        nextNode = queue.dequeue();

        for (let neighbor of graph[nextNode]) {
            if (neighbor in sideOf) {
                if (sideOf[nextNode] === sideOf[neighbor]) return false;
            } else {
                queue.enqueue(neighbor);
                sideOf[neighbor] = !sideOf[nextNode];
            }
        }
    }
    
    return true;
}

module.exports = { isBipartite }