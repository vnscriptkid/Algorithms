class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class RecursiveAnswer {
    constructor({bestDiameter, height}) {
        this.bestDiameter = bestDiameter;
        this.height = height;
    }
}

function _longestDiameter(root) {
    if (!root) return new RecursiveAnswer({bestDiameter: 0, height: -1}); // prevent accessing null

    // ask left
    const { bestDiameter: leftBestDia , height: leftHeight } = _longestDiameter(root.left);

    // ask right
    const { bestDiameter: rightBestDia, height: rightHeight } = _longestDiameter(root.right);

    const finalBestDia = Math.max(
        leftBestDia,
        rightBestDia,
        leftHeight + rightHeight + 2
    );

    return new RecursiveAnswer({
        height: 1 + Math.max(leftHeight, rightHeight),
        bestDiameter: finalBestDia
    });
}

function longestDiameter(root) {
    return _longestDiameter(root).bestDiameter;
}

module.exports = { Node, longestDiameter }