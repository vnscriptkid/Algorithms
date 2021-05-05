class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function buildMinBST(arr) {
    return _buildMinBST(arr, 0, arr.length - 1);
}

function _buildMinBST(arr, left, right) {
    if (left === right) return new Node(arr[left]);
    if (left > right) return null;
    
    // avoid overflow if adding 2 large numbers using: (left + right) / 2
    const middle = Math.floor(left + ((right - left) / 2)); 

    const root = new Node (arr[middle]);

    root.left = _buildMinBST(arr, left, middle - 1);
    root.right = _buildMinBST(arr, middle + 1, right);
    
    return root;
}

module.exports = { Node, buildMinBST }