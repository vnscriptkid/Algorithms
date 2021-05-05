class CircularQueue {
    CAPACITY = 5; // index: 0->4

    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = -1;
    }

    _calNewIndex(oldIndex) {
        return (oldIndex + 1) % this.CAPACITY;
    }

    enqueue(value) {
        const nextTail = this._calNewIndex(this.tail);
        if (this.data[nextTail])
            throw 'Queue is full'
        this.tail = nextTail;
        this.data[nextTail] = value;
    }

    dequeue() {
        const headValue = this.data[this.head];
        if (!headValue) return null;
        // clear data
        this.data[this.head] = undefined;
        this.head = this._calNewIndex(this.head)
        return headValue;
    }

    size() {
        if (this.empty()) return 0;
        if (this.tail >= this.head) return this.tail - this.head + 1;
        else return (this.CAPACITY - this.head) + (this.tail + 1);
    }

    getHead() {
        return this.data[this.head];    
    }

    getTail() {
        return this.data[this.tail];
    }

    empty() {
        return this.getTail() === undefined;
    }
}

module.exports = { CircularQueue }