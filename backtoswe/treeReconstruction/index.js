class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preOrder, inOrder) {
    if (!preOrder.length) return null;

    const rootNode = new Node(preOrder[0]);
    if (preOrder.length === 1) return rootNode;
    
    const indexOfRootAtInorder = inOrder.indexOf(rootNode.value);

    const leftInOrder = inOrder.slice(0, indexOfRootAtInorder);
    const rightInOrder = inOrder.slice(indexOfRootAtInorder + 1);

    const leftPreorder = preOrder.slice(1, 1 + leftInOrder.length)
    const rightPreorder = preOrder.slice(1 + leftInOrder.length);

    rootNode.left = buildTree(leftPreorder, leftInOrder);
    rootNode.right = buildTree(rightPreorder, rightInOrder);

    return rootNode;
}

module.exports = { Node, buildTree }