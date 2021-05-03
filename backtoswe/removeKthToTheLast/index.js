function removeKtoLast(ll, k) {
    if (k > ll.size() - 1) return; // boundary check

    if (k === ll.size() - 1) {
        // remove head
        ll.head = ll.head.next;
        return;
    }

    // make left is k + 1 away from right
    let count = 0;
    let left = right = ll.head;
    while (count !== k + 1) {
        right = right.next;
        count++;
    }

    // right and left go one step at a time
    while (right.next) {
        left = left.next;
        right = right.next;
    }

    // remove the node right after left
    left.next = left.next.next;
}

module.exports = { removeKtoLast }