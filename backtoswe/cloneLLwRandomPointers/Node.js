class Node {
    constructor(data, next=null, random=null) {
        this.data = data;
        this.next = next;
        this.random = random;
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