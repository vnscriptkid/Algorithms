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
        while (true) {
            if(!this.hasLeft(curIndex) && !this.hasRight(curIndex)) break;

            leftIndex = this.leftChild(curIndex);
            rightIndex = this.rightChild(curIndex);

            
            if (this.hasLeft(curIndex) && this.hasRight(curIndex)) {
                smallerChildIndex = this.data[leftIndex] <= this.data[rightIndex] ? leftIndex : rightIndex;
            } else {
                smallerChildIndex = leftIndex
            }
                

            if (this.data[curIndex] > this.data[smallerChildIndex]) {
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

    hasLeft(index) {
        return this.leftChild(index) < this.data.length;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    hasRight(index) {
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

    insert(value) {
        // push at the end of data array
        this.data.push(value);

        let curIndex = this.data.length - 1;
        // recursively compare with its parent
        while (true) {
            if (value < this.data[this.parent(curIndex)]) {
                this._swap(curIndex, this.parent(curIndex))
                curIndex = this.parent(curIndex);
            }
            else break;
        }
    }

    size() {
        return this.data.length;
    }

    empty() {
        return this.data.length === 0;
    }
}

module.exports = { MinHeap }