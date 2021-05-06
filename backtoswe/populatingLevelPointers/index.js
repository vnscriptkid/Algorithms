class Node {
    constructor(value, left=null, right=null, next=null) {
        this.value= value;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

function findNext(root, cur) {
    if (cur === root.left && root.right)
        return root.right;
    // (cur is right) or (cur is left but there's no right)
    let curRoot = root;
    while (curRoot.next) {
        curRoot = curRoot.next;
        if (curRoot.left || curRoot.right)
            return curRoot.left || curRoot.right;
    }
}

function populateLevelPointers(root) {
    if (!root) return;
    
    if (root.left) {
        root.left.next = findNext(root, root.left);
    }

    if (root.next && root.right) {
        root.right.next = findNext(root, root.right);
    }

    populateLevelPointers(root.left);
    populateLevelPointers(root.right);
}

module.exports = { Node, populateLevelPointers }
