class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(val) {
        this.data.push(val);
    }

    dequeue() {
        return this.data.shift();
    }

    empty() {
        return this.data.length === 0;
    }
}

function buildMappingNodeToParent(root) {
    const output = new Map();

    const queue = new Queue();
    queue.enqueue(root);

    let curNode = null;

    while (!queue.empty()) {
        curNode = queue.dequeue();

        for (let child of [curNode.left, curNode.right]) {
            if (child) {
                queue.enqueue(child);
                output.set(child, curNode);
            }
        }
    }

    return output;
}

function findNode(root, target) {
    if (root.val === target) return root;
    if (!root.left && !root.right) return null;

    const foundOnTheLeft = findNode(root.left, target);
    if (foundOnTheLeft) return foundOnTheLeft;
    
    const foundOnTheRight = findNode(root.right, target);
    if (foundOnTheRight) return foundOnTheRight;

    return null;
}

const LEVEL_SEPARATOR = ';'

function findNodesKdistance(root, target, k) {
    const output = [];
    const nodeToParent = buildMappingNodeToParent(root);
    
    const targetNode = findNode(root, target);
    if (!targetNode) return [];
    
    const seen = new Set();
    seen.add(targetNode);
    
    const queue = new Queue();
    queue.enqueue(targetNode);
    queue.enqueue(LEVEL_SEPARATOR);
    
    let count = 0;
    let curNode = null;

    while (!queue.empty()) {
        curNode = queue.dequeue();
        if (curNode === LEVEL_SEPARATOR && !queue.empty()) {
            queue.enqueue(LEVEL_SEPARATOR);
            if (++count === k) break;
            continue;
        }

        else if (curNode === LEVEL_SEPARATOR) break;

        const neighbors = [curNode.left, curNode.right, nodeToParent.get(curNode)].filter(n => !!n);

        for (let neighbor of neighbors) {
            if (!seen.has(neighbor)) {
                queue.enqueue(neighbor);
                seen.add(neighbor);
                if (count === k - 1) output.push(neighbor);
            }
        }
    }

    return output;
}

module.exports = { Node, findNodesKdistance, buildMappingNodeToParent, findNode }

