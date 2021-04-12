// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    // insert using iteration
    // insert(value) {
    //     let currentNode = this;
    //     const newNode = new Node(value);

    //     while (true) {
    //         if (value < this.data && !currentNode.left)  {
    //             currentNode.left = newNode;
    //             break;
    //         } else if (value < this.data) {
    //             currentNode = currentNode.left;
    //         } else if (value >= this.data && !currentNode.right) {
    //             currentNode.right = newNode;
    //             break;
    //         } else if (value >= this.data) {
    //             currentNode = currentNode.right;
    //         }
    //     }
    // }

    // insert using recursion
    insert(value) {
        if (value < this.data && !this.left)  {
            this.left = new Node(value);
        } else if (value < this.data) {
            this.left.insert(value);
        } else if (value >= this.data && !this.right) {
            this.right = new Node(value);
        } else if (value >= this.data) {
            this.right.insert(value);
        }
    }

    // contains using iteration
    // contains(value) {
    //     let currentNode = this;

    //     while (currentNode) {
    //         if (value === currentNode.data) {
    //             return currentNode;
    //         } else if (value < currentNode.data) {
    //             currentNode = currentNode.left;
    //         } else {
    //             currentNode = currentNode.right;
    //         }
    //     }

    //     return null;
    // }

    // contains using recursion
    contains(value) {
        if (value === this.data) return this;

        if (this.left && value < this.data) {
            return this.left.contains(value);
        } else if (this.right && value > this.data) {
            return this.right.contains(value);
        }

        return null;
    }
}

module.exports = Node;
