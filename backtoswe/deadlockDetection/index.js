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

    _hasCycle(vertex, seen) {
        if (seen.has(vertex)) return true;

        seen.add(vertex);
        
        for (let childVertex of this.adjacencyList.get(vertex)) {
            if (this._hasCycle(childVertex, seen)) return true;
        }

        return false;
    }

    hasCycle() {
        const allVertices = this.adjacencyList.keys();
        for (let vertex of allVertices) {
            const seen = new Set();
            if (this._hasCycle(vertex, seen)) return true;
        }
        return false;
    }
}

module.exports = { Graph }