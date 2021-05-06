class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Stack {
    constructor(data = []) {
        this.data = data;
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    empty() {
        return this.data.length === 0;
    }
}

function inorderTraversal(root) {
    let cur = root;
    const output = [];

    const stack = new Stack();
    let peek;

    while (!stack.empty() || cur) {
        // 1. go all the way to the left
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }

        // 2. cur now is null, point cur to peek
        peek = stack.pop();
        cur = peek;
        output.push(peek.value);

        // 3. move to right node (skip 1 if right node is null)
        cur = cur.right
    }

    return output;
}

module.exports = { Node, inorderTraversal }