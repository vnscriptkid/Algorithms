// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackToAdd = new Stack();
        this.stackToPull = new Stack();
    }

    add(value) {
        this.stackToAdd.push(value);
    }

    remove() {
        if (!this.stackToPull.peek()) {
            this._moveElements();
        }

        return this.stackToPull.pop();
    }

    peek() {
        if (!this.stackToPull.peek()) {
            this._moveElements();
        }

        return this.stackToPull.peek();
    }

    _moveElements() {
        while (this.stackToAdd.peek()) {
            this.stackToPull.push(this.stackToAdd.pop());
        }
    }
}

module.exports = Queue;
