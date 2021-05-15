class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Queue {
    constructor() {
        this.data = []
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

function levelOrderTraversal(root) {
    const output = [];

    const queue = new Queue();
    queue.enqueue('x')
    queue.enqueue(root)

    let nextItem = null;

    while (!queue.empty()) {
        nextItem = queue.dequeue();

        if (nextItem === 'x' && queue.empty()) break;
        else if (nextItem === 'x') { // finished traversing 1 level
            queue.enqueue('x');
            output.push([]);
        }
        else {
            output[output.length - 1].push(nextItem.val);
            for (let child of [nextItem.left, nextItem.right]) {
                if (child) queue.enqueue(child);
            }
        }
    }

    return output;
}

const node3 = new Node(3);
    const node9 = new Node(9);
    const node20 = new Node(20);
    const node15 = new Node(15);
    const node7 = new Node(7);

    node3.left = node9;
    node3.right = node20;
    node20.left = node15;
    node20.right = node7;

const result = levelOrderTraversal(node3);

module.exports = { Node, levelOrderTraversal }