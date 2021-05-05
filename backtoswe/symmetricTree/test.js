const {Node} = require('./Node');
const {check} = require('./index');

test('it works with symmetric tree', () => {
    const root = new Node(1);
    const node2Left = new Node(2);
    const node2Right = new Node(2);
    const node3Left = new Node(3);
    const node3Right = new Node(3);
    const node4Left = new Node(4);
    const node4Right = new Node(4);
    const node5Left = new Node(5);
    const node5Right = new Node(5);
    const node6Left = new Node(6);
    const node6Right = new Node(6);
    const node7Left = new Node(7);
    const node7Right = new Node(7);
    const node8Left = new Node(8);
    const node8Right = new Node(8);

    root.left = node2Left;
    root.right = node2Right;
    node2Left.left = node3Left;
    node2Left.right = node4Left;
    node2Right.left = node4Right;
    node2Right.right = node3Right;
    node3Left.left = node5Left;
    node3Left.right = node6Left;
    node4Left.left = node7Left;
    node4Left.right = node8Left;
    node4Right.left = node8Right;
    node4Right.right = node7Right;
    node3Right.left = node6Right;
    node3Right.right = node5Right;

    expect(check(root)).toEqual(true);
});

test('it works with asymetric tree', () => {
    const root = new Node(1);
    const node2Left = new Node(2);
    const node2Right = new Node(2);
    const node3Left = new Node(3);
    const node3Right = new Node(3);
    const node4Left = new Node(4);
    const node4Right = new Node(4);
    const node5Left = new Node(5);
    const node5Right = new Node(5);
    const node6Left = new Node(6);
    const node6Right = new Node(6);
    const node7Left = new Node(7);
    const node7Right = new Node(7);
    const node8Left = new Node(8);
    const node8Right = new Node(100);

    root.left = node2Left;
    root.right = node2Right;
    node2Left.left = node3Left;
    node2Left.right = node4Left;
    node2Right.left = node4Right;
    node2Right.right = node3Right;
    node3Left.left = node5Left;
    node3Left.right = node6Left;
    node4Left.left = node7Left;
    node4Left.right = node8Left;
    node4Right.left = node8Right;
    node4Right.right = node7Right;
    node3Right.left = node6Right;
    node3Right.right = node5Right;

    expect(check(root)).toEqual(false);
});

test('it works when root is null', () => {
    expect(check(null)).toEqual(true);
});

test('it works when root has no children', () => {
    expect(check(new Node(1))).toEqual(true);
});

test('it works when root has 2 children', () => {
    const left = new Node(2);
    const right = new Node(2);
    const root = new Node(1, left, right);

    expect(check(root)).toEqual(true);
});

test('it works when 2 children are asymmetric', () => {
    const left = new Node(2);
    const right = new Node(3);
    const root = new Node(1, left, right);

    expect(check(root)).toEqual(false);
});

test('it works when 1 child is null while other is not', () => {
    const left = new Node(2);
    const right = null;
    const root = new Node(1, left, right);

    expect(check(root)).toEqual(false);
});