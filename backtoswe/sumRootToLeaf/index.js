class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function findPaths(root, target, path=[], allPaths=[]) {
    if (!root) return [];
    
    // track down current node
    path.push(root.value);

    if (!root.left && !root.right) { // reached leaf already
        if (target - root.value === 0) allPaths.push([...path])
        return allPaths;
    }

    if (root.left) {
        findPaths(root.left, target - root.value, path, allPaths)
        path.pop()
    }
    
    if (root.right) {
        findPaths(root.right, target - root.value, path, allPaths)
        path.pop()
    }

    return allPaths;
}

module.exports = { Node, findPaths }