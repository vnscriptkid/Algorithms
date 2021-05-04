const {Node, LinkedList} = require('./Node')

function swapValues(ll) {
    let cur = ll.getHead();
    let temp = 0;

    while (cur && cur.next) {
        // swap values
        temp = cur.data;
        cur.data = cur.next.data;
        cur.next.data = temp;
        // next pair
        cur = cur.next.next
    }
}

function swapPointers(ll) {
    // a->b->c-d
    // b->a->d->c
    let first = ll.getHead(), second, first2, second2;
    let headChanged = false;

    while (first && first.next) {
        second = first.next;
        first2 = second.next;
        second2 = first2 && first2.next

        if (!headChanged) {
            ll.head = second;
            headChanged = true;
        }

        // swap
        second.next = first;
        first.next = second2;

        if (second2) {
            first = second2.next;
            second2.next = first2;
            first2.next = first;
        }
        else break;        
    }
}

module.exports = { swapPointers, swapValues }