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

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
    }

    addVertex(v) {
        this.adjList.set(v, []);
    } 

    reverseEdgesDirection(adjList) {
        const newAdjList = new Map();

        // init
        for (let vertex of adjList.keys()) {
            newAdjList.set(vertex, []);
        }

        for (let vertex of adjList.keys()) {
            for (let destVertex of adjList.get(vertex)) {
                newAdjList.get(destVertex).push(vertex);
            }
        }

        return newAdjList;
    }

    isStronglyConnected() {
        if (!this.allReachableViaBfs(this.adjList))
            return false;
        
        const newAdjList = this.reverseEdgesDirection(this.adjList)

        return this.allReachableViaBfs(newAdjList);
    }

    allReachableViaBfs(adjList) {
        const keysList = Array.from(adjList.keys());
        const anyRandomVertex = keysList[0];

        const seen = new Set();
        seen.add(anyRandomVertex);
        const queue = new Queue();
        queue.enqueue(anyRandomVertex);

        let curVertex=null;
        
        while (!queue.empty()) {
            curVertex = queue.dequeue();

            for (let neighbor of adjList.get(curVertex)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.enqueue(neighbor);
                }
            }
        } 
        
        return seen.size === adjList.size;
    }
}

module.exports = { Graph }