class Queue {
    constructor() {
        this.realQueue = [];
        this.doubleEndedQueue = [];
    }

    enqueue(value) {
        // add to real queue
        this.realQueue.push(value);
        // add to inner double ended queue
        while (this.doubleEndedQueue.length) {
            let nextToCompete = this.doubleEndedQueue[this.doubleEndedQueue.length - 1]; // end of queue
            if (value > nextToCompete) this.doubleEndedQueue.pop();
            else break;
        }
        this.doubleEndedQueue.push(value);
    }

    dequeue() {
        if (this.realQueue[0] === this.max()) {
            this.doubleEndedQueue.shift();
        }
        return this.realQueue.shift();
    }

    max() {
        return this.doubleEndedQueue[0];
    }
}

module.exports = { Queue }