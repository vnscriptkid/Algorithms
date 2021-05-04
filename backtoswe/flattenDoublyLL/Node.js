class Node {
    constructor(data, next=null, prev=null, child=null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }

    setup({next, prev, child}) {
        if (next) this.next = next;
        if (prev) this.prev = prev;
        if (child) this.child = child;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    size() {
        let count = 0;
        let cur = this.head;

        while (cur) {
            count += 1;
            cur = cur.next;
        }

        return count;
    }

    getHead() {
        return this.head;
    }

    getLast() {
        let cur = this.head;

        while (cur && cur.next) {
            cur = cur.next
        }

        return cur;
    }
    
    addLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
            

        let cur = this.head;

        while (cur.next) {
            cur = cur.next;
        }

        cur.next = new Node(data);
    }
}

module.exports = { Node, LinkedList }