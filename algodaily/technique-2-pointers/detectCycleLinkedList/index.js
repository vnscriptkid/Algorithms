class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}

module.exports = { Node, hasCycle }