const {Node, LinkedList} = require('./Node');

function clone(ll) {
    const output = new LinkedList();
    const mapping = new Map();

    // Map node-node between 2 linkedlist
    let cur = ll.getHead();
    while (cur) {
        mapping.set(cur, new Node(cur.data));
        // next
        cur = cur.next;
    }

    // Build connections of cloned linkedlist
    cur = ll.getHead();
    let clonedNode=null, nextNode=null,randomNode=null;
    while (cur) {
        clonedNode = mapping.get(cur);
        nextNode = cur.next && mapping.get(cur.next);
        randomNode = cur.random && mapping.get(cur.random);
        // clone connections
        clonedNode.next = nextNode;
        clonedNode.random = randomNode;
        // next
        cur = cur.next;
    }

    output.head = mapping.get(ll.getHead());

    return output;
}

module.exports = {clone}