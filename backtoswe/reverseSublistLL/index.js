const {Node, LinkedList} = require('./Node');

function reverseSublist(ll, start, end) {
    // check boundary
    if (end <= start) return;
    if (start < 0 || end > ll.size() - 1) return;

    // ll: 1->2->3->4->5
    //     #  ^
    // go to start position
    const dummyHead = new Node('dummy');
    dummyHead.next = ll.getHead();
    let cur = dummyHead, count=-1;
    while (cur && count !== start - 1) {
        cur = cur.next;
        count++;
    }

    const nodeBeforeSublist = cur;
    cur = cur.next; // advance cur to start
    let tempNode;

    // iteratively move the node right after working pointer to the head of sublist
    while (start < end) {
        tempNode = cur.next;
        cur.next = tempNode.next;

        tempNode.next = nodeBeforeSublist.next;
        nodeBeforeSublist.next = tempNode;
        start++;
    }
    // handle case start === 0
    ll.head = dummyHead.next;
}

module.exports = { reverseSublist }