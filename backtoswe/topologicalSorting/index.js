class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
    }

    buildIndegMap() {
        const indegMap = new Map();

        // init
        for (let v of this.adjList.keys()) {
            indegMap.set(v, 0);
        }
        
        for (let vertex1 of this.adjList.keys()) {
            for (let vertex2 of this.adjList.get(vertex1)) {
                indegMap.set(vertex2, indegMap.get(vertex2) + 1);
            }
        }
        return indegMap;
    }

    removeFromIndegMap(indegMap, vertex) {        
        // decrease indeg coming from vertex by 1
        for (let destVertex of this.adjList.get(vertex)) {
            indegMap.set(destVertex, indegMap.get(destVertex) - 1);
        }
        // remove vertex from map
        indegMap.delete(vertex);
    }

    topologicalSort() {
        const output = [];
        const indegMap = this.buildIndegMap();
        const seen = new Set();

        while (indegMap.size !== 0) {
            for (let [vertex, indeg] of indegMap.entries()) {
                if (indeg === 0) {
                    // mark as seen
                    seen.add(vertex);
                    output.push(vertex);
                    // update map
                    this.removeFromIndegMap(indegMap, vertex);
                    // continue
                    continue;
                }
            }
        }

        return output;
    }
}

module.exports = { Graph }