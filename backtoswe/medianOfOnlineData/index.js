const { MinHeap } = require("./minHeap");
const { MaxHeap } = require("./maxHeap");

class StreamData {
    constructor(stream=[]) {
        this.stream = stream;
        this.current = -1;
    }

    next() {
        this.current += 1;
        return this.stream[this.current] || null;
    }

    hasNext() {
        const nextIndex = this.current + 1;
        return nextIndex < this.stream.length;
    }
}

function findMedian(stream) {
    minHeap = new MinHeap(); // greater side
    maxHeap = new MaxHeap(); // smaller side

    let nextPiece;

    while (stream.hasNext()) {
        nextPiece = stream.next();

        if (minHeap.size() === maxHeap.size()) {
            minHeap.insert(nextPiece);
            maxHeap.insert(minHeap.popMin());
        } else {
            maxHeap.insert(nextPiece);
            minHeap.insert(maxHeap.popMax());
        }
    }

    if (minHeap.size() === maxHeap.size())
        return Math.floor(maxHeap.getMax() + (minHeap.getMin() - maxHeap.getMax()) / 2);
    else
        return maxHeap.getMax();
}

const stream = new StreamData([20, 50, 45, 34]);

const result = findMedian(stream);

module.exports = { StreamData, findMedian }