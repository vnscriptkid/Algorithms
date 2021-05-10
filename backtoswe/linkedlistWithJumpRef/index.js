class Node {
    constructor(value, next=null, jump=null, order=-1) {
        this.value = value;
        this.next = next;
        this.jump = jump;
        this.order = order;
    }
}

function _jumpTraversal(node, visited) {
    if (visited.has(node)) return;

    node.order = visited.size;
    visited.add(node);

    if (node.jump) _jumpTraversal(node.jump, visited);
    if (node.next) _jumpTraversal(node.next, visited);
}

function jumpTraversal(root) {
    visited = new Set();
    _jumpTraversal(root, visited);
    return root;
}

////////////////
class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    empty() {
        return this.data.length === 0;
    }
}

function jumpTraversalIteratively(root) {
    visited = new Set();

    visiting = new Stack();
    visiting.push(root);

    let curNode;
    
    while (!visiting.empty()) {
        curNode = visiting.pop();
        if (visited.has(curNode)) continue;

        curNode.order = visited.size;
        visited.add(curNode);

        if (curNode.next) visiting.push(curNode.next);
        if (curNode.jump) visiting.push(curNode.jump);
    }
}

module.exports = { jumpTraversal, Node, jumpTraversalIteratively }