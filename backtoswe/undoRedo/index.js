class Stack {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    empty() {
        return this.data.length === 0;
    }

    pop() {
        return this.data.pop();
    }
}

class Action {
    constructor(fn, params) {
        this.fn = fn;
        this.params = params;
    }
}

class TextEditor {
    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
        this.text = '';
        // setup reversed actions
        this.reversed = new Map();
        this.reversed.set(this._delete, this._insert)
        this.reversed.set(this._insert, this._delete)
    }

    insert(char) {
        this.undoStack.push(new Action(this._delete, char));
        this._insert(char);
    }

    _insert(char) {
        this.text += char;
    }

    delete(char) {
        this.undoStack.push(new Action(this._insert, char));
        this._delete(char);
    }

    _delete(char) {
        this.text = this.text.substring(0, this.text.length - 1);
    }

    getText() {
        return this.text;
    }

    undo() {
        if (!this.undoStack.empty()) {
            const action = this.undoStack.pop();
            action.fn.call(this, action.params)
            // pushing redo
            const reversedFn = this.reversed.get(action.fn);
            this.redoStack.push(new Action(reversedFn, action.params));
        }
    }

    redo() {
        if (!this.redoStack.empty()) {
            const action = this.redoStack.pop();
            action.fn.call(this, action.params)
            // pushing undo
            const reversedFn = this.reversed.get(action.fn);
            this.undoStack.push(new Action(reversedFn, action.params));
        }
    }
}

module.exports = {Stack, TextEditor}