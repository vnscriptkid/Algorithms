class MaxHeap {
    constructor(data=[]) {
        this.data = data;
    }

    getMax() {
        return this.data[0] || null;
    }

    popMax() {
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

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
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
            if (value > this.data[this.parent(curIndex)]) {
                this._swap(curIndex, this.parent(curIndex))
                curIndex = this.parent(curIndex);
            }
            else break;
        }
    }

    size() {
        return this.data.length;
    }
}

module.exports = { MaxHeap }