// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new Node(value, this.head);
    }

    size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;
        
        let currentNode = this.head;

        while (currentNode) {
            if (!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    clear() {
        this.head = null;
    }    

    removeFirst() {
        if (!this.head) return;
        
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prevNode = this.head;
        let currentNode = prevNode.next;

        while (currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = null;
    }

    insertLast(value) {
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = new Node(value);
        } else {
            lastNode.next = new Node(value);
        }

    }

    getAt(index) {
        let currentIndex = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (currentIndex === index) return currentNode;

            currentNode = currentNode.next;
            currentIndex++;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.removeFirst();
            return;
        }

        const prevNode = this.getAt(index - 1);
        const node = prevNode.next;

        if (!prevNode || !node) return;

        prevNode.next = node.next;
    }

    insertAt(value, index) {
        if (!this.head || index === 0) {
            this.insertFirst(value);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(value, prevNode.next);
        prevNode.next = newNode;
    }

    forEach(fn) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            fn(currentNode, index);
            currentNode = currentNode.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;

        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
