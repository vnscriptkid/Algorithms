class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class RecursiveAnswer {
    constructor({balanced, height}) {
        this.balanced = balanced;
        this.height = height;
    }
}

function _isBalanced(root) {
    if (!root)
        return new RecursiveAnswer({ balanced: true, height: -1 })
    
    const { balanced: isLeftBalanced, height: leftHeight } = _isBalanced(root.left);
    const { balanced: isRightBalanced, height: rightHeight } = _isBalanced(root.right);

    const height = Math.max(leftHeight, rightHeight) + 1;

    if (!isLeftBalanced || !isRightBalanced || Math.abs(leftHeight - rightHeight) > 1) 
        return new RecursiveAnswer({balanced: false, height})

    return new RecursiveAnswer({ balanced: true, height })
}

function isBalanced(root) {
    return _isBalanced(root).balanced;
}

module.exports = { Node, RecursiveAnswer, isBalanced }