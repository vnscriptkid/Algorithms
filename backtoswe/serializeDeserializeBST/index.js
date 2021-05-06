class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return 'x'
    return root.value + ',' + serialize(root.left) +',' + serialize(root.right);
}

class Queue {
    constructor(arr=[]) {
        this.data = arr;
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

function _deserialize(queue) {
    const head = queue.dequeue();
    if (head === 'x') return null;

    const root = new Node(head);

    root.left = _deserialize(queue);
    root.right = _deserialize(queue);

    return root;
}

function deserialize(token) {
    const queue = new Queue(token.split(','));
    return _deserialize(queue)
}

module.exports = { Node, serialize, deserialize }