function getLastNode(head) {
    let cur = head;

    while (cur && cur.next) {
        cur = cur.next;
    }
    
    return cur;
}

function flatten(head) {
    let cur = head;
    let lastNode = null, savedNext = null;

    while (cur) {
        if (cur.child) {
            savedNext = cur.next;
            let headOfChild = flatten(cur.child);
            cur.next = headOfChild;
            headOfChild.prev = cur;
            cur.child = null;

            lastNode = getLastNode(cur) // TODO: something better
            lastNode.next = savedNext;
            savedNext.prev = lastNode;
        }

        // next
        cur = cur.next;
    }

    return head;
}

const {Node} = require('./Node');

    node1 = new Node(1);
    node2 = new Node(2);
    node3 = new Node(3);
    node4 = new Node(4);
    node5 = new Node(5);
    node6 = new Node(6);
    node7 = new Node(7);
    node8 = new Node(8);
    node9 = new Node(9);
    node10 = new Node(10);
    node11 = new Node(11);
    node12 = new Node(12);

    node1.setup({next: node2})
    node2.setup({next: node3, prev: node1})
    node3.setup({next: node4, prev: node2, child: node7});
    node4.setup({next: node5, prev: node3})
    node5.setup({next: node6, prev: node4})
    node6.setup({prev: node5})

    node7.setup({next: node8})
    node8.setup({next: node9, prev: node7, child: node11})
    node9.setup({next: node10, prev: node8})
    node10.setup({prev: node9})
    
    node11.setup({next: node12})
    node12.setup({prev: node11})

    flatten(node1);

module.exports = { flatten }