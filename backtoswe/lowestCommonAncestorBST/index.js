class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function findLowestCommonAncestor(root, node1Value, node2Value) {
    if (root.value > node1Value && root.value > node2Value)
        return findLowestCommonAncestor(root.left, node1Value, node2Value)
    if (root.value < node1Value && root.value < node2Value)
        return findLowestCommonAncestor(root.right, node1Value, node2Value)

    return root;
}

module.exports = { Node, findLowestCommonAncestor }

