class MaxHeap {
    constructor({data=[], immutable=false}) {
        this.data = data;
        this.immutable = immutable;
    }

    indexOf(num) {
        return this.data.indexOf(num);
    }

    empty() {
        return this.data.length === 0;
    }

    getMax() {
        return this.data[0] || null;
    }

    popMax() {
        if (this.immutable)
            throw 'This heap is immutable.'
        // swap value of min and last node in the tree
        this._swap(0, this.data.length - 1);
        // pop out last element 
        const maxValue = this.data.pop();

        let curIndex = 0, leftIndex, rightIndex, greaterChildIndex;
        // recursively compare with left and right child to make sure min at root at every step
        while (true) {
            leftIndex = this.leftChild(curIndex);
            rightIndex = this.rightChild(curIndex);

            greaterChildIndex = this.data[leftIndex] > this.data[rightIndex] ? leftIndex : rightIndex;

            if (this.data[curIndex] < this.data[greaterChildIndex]) {
                this._swap(curIndex, greaterChildIndex);
                curIndex = greaterChildIndex;
            }
            else break;
        }

        return maxValue;
    }

    hasLeftChild(index) {
        return this.leftChild(index) < this.data.length;
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    leftChildValue(index) {
        return this.data[this.leftChild(index)];
    }

    hasRightChild(index) {
        return this.rightChild(index) < this.data.length;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    rightChildValue(index) {
        return this.data[this.rightChild(index)];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    _swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    insert(value) {
        if (this.immutable)
            throw 'This heap is immutable.'

        // push at the end of data array
        this.data.push(value);

        let curIndex = this.data.length - 1;
        // recursively compare with its parent
        while (true) {
            if (value > this.data[this.parent(curIndex)]) {
                this._swap(curIndex, this.parent(curIndex))
                curIndex = this.parent(curIndex);
            }
            else break;
        }
    }
}

function getKLargestFromHeap(heap, k) {
    const output = [];

    const candidatesHeap = new MaxHeap({});
    candidatesHeap.insert(heap.getMax());
    
    let curIndex;

    while (!candidatesHeap.empty() && output.length < k) {
        nextLargest = candidatesHeap.popMax();
        output.push(nextLargest);

        curIndex = heap.indexOf(nextLargest);

        if (heap.hasLeftChild(curIndex)) candidatesHeap.insert(heap.leftChildValue(curIndex));
        if (heap.hasRightChild(curIndex)) candidatesHeap.insert(heap.rightChildValue(curIndex));
    }

    return output;
}

module.exports = { MaxHeap, getKLargestFromHeap }