class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    getHead() {
        return this.head;
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