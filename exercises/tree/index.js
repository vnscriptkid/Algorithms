// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

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

class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = new Queue();
        queue.enqueue(this.root);
        let currentNode;

        while (!queue.isEmpty()) {
            currentNode = queue.dequeue();

            fn(currentNode);
            
            currentNode.children.forEach(node => queue.enqueue(node));
        }
    }

    traverseDF(fn) {
        const stack = new Stack();
        stack.push(this.root);
        let currentNode;

        while (!stack.isEmpty()) {
            currentNode = stack.pop();

            currentNode.children.slice().reverse().forEach(node => stack.push(node));

            fn(currentNode);
        }
    }
}

module.exports = { Tree, Node };
