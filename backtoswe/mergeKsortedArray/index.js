class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }

    isGreaterThan(otherNode) {
        return this.value > otherNode.value;
    }
}

class MinHeap {
    constructor(data=[]) {
        this.data = data;
    }

    getMin() {
        return this.data[0] || null;
    }

    popMin() {
        // swap value of min and last node in the tree
        this._swap(0, this.data.length - 1);
        // pop out last element 
        const minValue = this.data.pop();

        let curIndex = 0, leftIndex, rightIndex, smallerChildIndex;
        // recursively compare with left and right child to make sure min at root at every step
        while (this.hasLeftChild(curIndex) || this.hasRightChild(curIndex)) {
            leftIndex = this.leftChild(curIndex); 
            rightIndex = this.rightChild(curIndex);

            if (this.hasLeftChild(curIndex) && this.hasRightChild(curIndex)) {    
                smallerChildIndex = this.data[leftIndex] <= this.data[rightIndex] ? leftIndex : rightIndex;
            } else {
                smallerChildIndex = leftIndex;
            }

            if (this.data[curIndex].isGreaterThan(this.data[smallerChildIndex])) {
                this._swap(curIndex, smallerChildIndex);
                curIndex = smallerChildIndex;
            }
            else break;
        }

        return minValue;
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    hasLeftChild(index) {
        return this.leftChild(index) < this.data.length;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    hasRightChild(index) {
        return this.rightChild(index) < this.data.length;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    _swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    insert(node) {
        // push at the end of data array
        this.data.push(node);

        let curIndex = this.data.length - 1;

        if (curIndex === 0) return;
        
        // recursively compare with its parent
        while (true) {
            if (this.data[this.parent(curIndex)].isGreaterThan(node)) {
                this._swap(curIndex, this.parent(curIndex))
                curIndex = this.parent(curIndex);
            }
            else break;
        }
    }

    empty() {
        return this.data.length === 0;
    }
}

function mergeKsortedArray(rootNodes) {
    const minHeap = new MinHeap();
    const output = [];

    for (let node of rootNodes) {
        minHeap.insert(node);
    }

    let processedNode;

    while (!minHeap.empty()) {
        processedNode = minHeap.popMin();

        output.push(processedNode);

        if (processedNode.next) {
            minHeap.insert(processedNode.next);
        }
    }

    return output;
}

module.exports = { mergeKsortedArray, Node, MinHeap }