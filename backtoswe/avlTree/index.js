class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
}

class AVLTree {
    constructor(root=null) {
        this.root = root;
    }

    height(root=this.root) {
        if (!root) return 0;

        return root.height;
    }

    balanceFactor(root=this.root) {
        if (!root) return 0;

        return this.height(root.left) - this.height(root.right);
    }

    _findNextSuccessor(root) {
        // if (!root.left && !root.right) return null;
        
        // if (root.left) {
        //     root.left = this._findNextSuccessor(root.left);
        // } else {
        //     root.right = this._findNextSuccessor(root.right);
        // }

        // return root;
        let cur = root;

        while (cur) {
            if (!cur.left && !cur.right)
                return cur;
            
            if (cur.left) cur = cur.left;
            else cur = cur.right;
        }
    }

    delete(value) {
        this._delete(value, this.root);
    }

    _delete(value, root=this.root) {
        if (!root) return null; // not found
        
        if (value === root.value) {
            // found it
            let newRoot;
            if (!root.left && !root.right) newRoot = null;
            else if (!root.right) newRoot = root.left; // only left exists
            else if (!root.left) newRoot = root.right; // only left exists
            else { // both left and right exist
                newRoot = this._findNextSuccessor(root.right);
                this._delete(newRoot.value, root);
                newRoot.left = root.left;
                newRoot.right = root.right;
            }

            return newRoot;
        } 
        
        else if (value < root.value) {
            // find on the left
            root.left = this._delete(value, root.left);
        } 
        
        else {
            // find on the right
            root.right = this._delete(value, root.right);
        }

        const newRoot = this.checkBalanceAndGetNewRoot(root, value);

        if (newRoot) root = newRoot;

        return root;
    }

    _insert(value, root=this.root) {
        if (!root) return new Node(value);

        if (value < root.value)
            root.left = this._insert(value, root.left);
        else
            root.right = this._insert(value, root.right);

        this.updateHeightOf(root);

        const newRoot = this.checkBalanceAndGetNewRoot(root, value);

        if (newRoot) root = newRoot;

        return root;
    }

    checkBalanceAndGetNewRoot(root, value) {
        const balanceFactor = this.balanceFactor(root);

        if (Math.abs(balanceFactor) < 2) return null; // balanced tree

        let newRoot=null;

        if (balanceFactor == 2 && value < root.left.value) { // left left
            newRoot = this.rightRotate(root);
        }

        else if (balanceFactor == 2) { // left right
            root.left = this.leftRotate(root.left);
            newRoot = this.rightRotate(root);
        }

        else if (balanceFactor == -2 && value >= root.right.value) {
            newRoot = this.leftRotate(root);
        }

        else if (balanceFactor == -2) {
            root.right = this.rightRotate(root.right);
            newRoot = this.leftRotate(root);
        }

        if (!newRoot) throw 'Ooops! Something went wrong';

        return newRoot;
    }

    leftRotate(root) { // make root becomes left node of its right child
        const rightChild = root.right;
        const currentLeftNodeOfRightChild = rightChild.left;
        root.right = currentLeftNodeOfRightChild;
        rightChild.left = root;
        // update heights
        this.updateHeightOf(root);
        this.updateHeightOf(rightChild);

        return rightChild;
    }

    rightRotate(root) { // make root becomes right node of its left child 
        const leftChild = root.left;
        const currentRightNodeOfLeftChild = leftChild.right;
        root.left = currentRightNodeOfLeftChild;
        leftChild.right = root;
        // update heights
        this.updateHeightOf(root);
        this.updateHeightOf(leftChild);
        return leftChild;
    }

    updateHeightOf(node) {
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    insert(value) {
        this.root = this._insert(value);
    }

    insertUsingLoop(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let curNode = this.root;

        while (curNode) {
            if (value >= curNode.value && !curNode.right) {
                curNode.right = new Node(value);
                break;
            } else if (value >= curNode.value) {
                curNode = curNode.right;
            }

            else if (!curNode.left) {
                curNode.left = new Node(value);
                break;
            } else {
                curNode = curNode.left;
            }
        }
    }
}

const tree = new AVLTree();
const nodes = [20, 15, 25, 14, 28, 16, 22, 13, 21, 23, 26, 29, 27]

for (let node of nodes) {
    tree.insert(node);
}

tree.delete(25);

module.exports = { Node, AVLTree }
