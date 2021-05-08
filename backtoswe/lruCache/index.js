class Node {
    constructor(key=null, value=null, next=null, prev=null) {
        this.key = key; // to call a node
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LruCache {
    constructor(maxSize=5) {
        this.head = new Node(); // dummy head
        this.tail = new Node(); // dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
        // size
        this.maxSize = maxSize;
        this.currentSize = 0;
        // mapping between key and Node
        this.mapping = new Map();
    }

    get(key) {
        // get from mapping by key
        const foundNode = this.mapping.get(key);
        if (!foundNode) return null;

        this._moveToHead(foundNode);

        // return node
        return foundNode;
    }

    put(key, value) {
        const foundNode = this.get(key);

        if (foundNode) return foundNode;

        if (this.currentSize === this.maxSize) { //cache limit exceeded
            // remove node at tail
            this._removeAtTail()
        }
        // add new node to the head
        const newNode = new Node(key, value);
        this._addToHead(newNode);
    }

    _addToHead(node) {
        this.head.next.prev = node;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next = node;
        // update mapping, size
        this.mapping.set(node.key, node);
        this.currentSize += 1;
    }

    _removeAtTail() {
        if (this.empty()) return;
        // fix links
        const node = this.tail.prev;
        this.tail.prev = node.prev;
        node.prev.next = this.tail;
        // update size, mapping
        this.currentSize -= 1;
        this.mapping.delete(node.key);
    }

    _moveToHead(node) {
        // fix prev and next
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        // move to head as most recent used
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }

    empty() {
        return this.head.next === this.tail;
    }

    size() {
        return this.currentSize;
    }
}

module.exports = { LruCache, Node }