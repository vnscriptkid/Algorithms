function isSymmetric(left, right) {
    if (!left && !right) return true;

    if (left && right && left.value !== right.value)
        return false;

    if (left && right) {
        return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
    }

    return false;
}

function check(root) {
    if (!root) return true;

    return isSymmetric(root.left, root.right);
}

module.exports = { check }