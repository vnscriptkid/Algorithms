// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// 1st way: my original solution
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.unshift(value);
    }

    dequeue() {
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

// function levelWidth(root) {
//     const queue = new Queue();
//     queue.enqueue(root);
//     root.level = 0;
//     const result = [];
//     let node;

//     while (!queue.isEmpty()) {
//         node = queue.dequeue();

//         result[node.level] = result[node.level] ? result[node.level] + 1 : 1;

//         node.children.forEach(child => {
//             queue.enqueue(child);
//             child.level = node.level + 1;
//         });
//     }

//     return result;
// }

// 2nd way: using a delimiter
function levelWidth(root) {
    const queue = new Queue();
    const boundary = '#';

    // initial state
    queue.enqueue(root);
    queue.enqueue(boundary);

    let item;
    const counters = [0];
    let indexCounter = 0;

    while (!queue.isEmpty()) {
        item = queue.dequeue();

        if (item === boundary && queue.isEmpty()) {
            return counters;
        } else if (item === boundary) {
            queue.enqueue(boundary);
            counters[++indexCounter] = 0;
        } else {
            // item is node
            counters[indexCounter] += 1;
            item.children.forEach(child => queue.enqueue(child));
        }


    }

}

module.exports = levelWidth;
