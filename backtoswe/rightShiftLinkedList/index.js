function rightShift(ll, steps=1) {
    size = ll.size();

    steps %= size;

    // go to kth to the last
    let count = 0;
    let left = right = ll.getHead();
    while (count !== steps) {
        right = right.next;
        count++;
    }

    while (right && right.next) {
        right = right.next;
        left = left.next;
    }
    // point right to head
    right.next = ll.getHead();

    // set new head
    ll.head = left.next;
    
    // point left to null
    left.next = null;
}

module.exports = { rightShift }