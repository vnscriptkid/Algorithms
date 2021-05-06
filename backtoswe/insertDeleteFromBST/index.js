class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function insertNode(root, value) {
    if (value <= root.value && !root.left)
        root.left = new Node(value);
    else if (value > root.value && !root.right)
        root.right = new Node(value);
    else if (value <= root.value) insertNode(root.left, value);
    else insertNode(root.right, value);
}

function getMostLeftedChild(root) {
    let cur = root;

    while (cur) {
        if (!cur.left)
            return cur;
        cur = cur.left;
    }
}

function deleteNode(root, value) {

    if (value === root.value) {
        if (!root.left && !root.right) return null;
        else if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else {
            const newRoot = getMostLeftedChild(root);
            deleteNode(root, newRoot.value);
            newRoot.left = root.left
            newRoot.right = root.right;
            return newRoot;
        } 
    } else if (value > root.value) {
        root.right = deleteNode(root.right, value);;
    } else {
        root.left = deleteNode(root.left, value);
    }

    return root;
}

module.exports = { Node, insertNode, deleteNode }