const {Stack, TextEditor} = require('./index');

test('Stack works correctly', () => {
    const stack = new Stack();
    expect(stack.empty()).toEqual(true);
    stack.push(1);
    stack.push(2);
    expect(stack.empty()).toEqual(false);
    expect(stack.peek()).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.empty()).toEqual(true);
});

test('TextEditor works correctly', () => {
    const editor = new TextEditor();
    editor.insert('a')
    editor.insert('b')
    editor.insert('c')
    expect(editor.getText()).toEqual('abc');
    editor.delete('c');
    expect(editor.getText()).toEqual('ab');

    editor.undo();
    expect(editor.getText()).toEqual('abc');
    
    editor.undo();
    editor.undo();
    expect(editor.getText()).toEqual('a');
    
    editor.redo();
    expect(editor.getText()).toEqual('ab');
})
