class Node {
    constructor(value, left=null, right=null, parent=null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

function findSmallestNode(root) {
    let cur = root;

    while (cur) {
        if (!cur.left)
            return cur;
        cur = cur.left;
    }
}

function findLastExhaustedParent(node) {
    let cur = node;
    while (cur) {
        if (!cur.parent) return cur;
        if (cur === cur.parent.left)
            return cur;
        cur = cur.parent;
    }
}

function findSuccessor(node) {
    if (node.right)
        return findSmallestNode(node.right);

    // no right side
    return findLastExhaustedParent(node).parent;
} 

module.exports = { Node, findSuccessor }
