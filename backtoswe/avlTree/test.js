const {Node, AVLTree} = require('./index');

test('AVLTree insert() works in case Right-Right', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
})

test('AVLTree insert() works in case Right-Left', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(3);
    tree.insert(2);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
})

test('AVLTree insert() works in case Left-Left', () => {
    const tree = new AVLTree();
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
})

test('AVLTree insert() works in case Left-Right', () => {
    const tree = new AVLTree();
    tree.insert(3);
    tree.insert(1);
    tree.insert(2);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
})

test('AVLTree insert() works with lot of nodes', () => {
    const tree = new AVLTree();
    tree.insert(10)
    tree.insert(20)
    tree.insert(30)
    tree.insert(40)
    tree.insert(50)
    
    expect(tree.root.value).toEqual(20);
    expect(tree.root.left.value).toEqual(10);
    expect(tree.root.right.left.value).toEqual(30);
    expect(tree.root.right.right.value).toEqual(50);

    tree.insert(25)
    expect(tree.root.value).toEqual(30);
    expect(tree.root.left.value).toEqual(20);
    expect(tree.root.left.left.value).toEqual(10);
    expect(tree.root.left.right.value).toEqual(25);
    expect(tree.root.right.right.value).toEqual(50);
    expect(tree.root.right.left).toEqual(null);
})

test('AVLTree delete() works in case deleting leaf node', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
    expect(tree.root.right.right.value).toEqual(4);

    tree._delete(4);

    expect(tree.root.right.right).toEqual(null);
})

test('AVLTree insert() works in case deleting node has only left node', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(4);
    tree.insert(3);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(4);
    expect(tree.root.right.left.value).toEqual(3);

    tree.delete(4); 

    expect(tree.root.right.value).toEqual(3);
    expect(tree.root.right.left).toEqual(null);
    expect(tree.root.right.right).toEqual(null);
})

test('AVLTree insert() works in case deleting node has only left node', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(4);
    tree.insert(3);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(4);
    expect(tree.root.right.left.value).toEqual(3);

    tree.delete(4); 

    expect(tree.root.right.value).toEqual(3);
    expect(tree.root.right.left).toEqual(null);
    expect(tree.root.right.right).toEqual(null);
})

test('AVLTree insert() works in case deleting node has only right', () => {
    const tree = new AVLTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(4);
    tree.insert(3);

    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(4);
    expect(tree.root.right.left.value).toEqual(3);

    tree.delete(4); 

    expect(tree.root.right.value).toEqual(3);
    expect(tree.root.right.left).toEqual(null);
    expect(tree.root.right.right).toEqual(null);
})

test('AVLTree insert() works in case deleting node has both left and right child', () => {
    const tree = new AVLTree();
    const nodes = [20, 15, 25, 14, 28, 16, 22, 13, 21, 23, 26, 29, 27]

    for (let node of nodes) {
        tree.insert(node);
    }

    tree.delete(25);

    const root = tree.root;
    expect(root.value).toEqual(20)
    const node27 = root.right;
    const node22 = node27.left;
    const node28 = node27.right;
    const node26 = node28.left;
    expect(node27.value).toEqual(27);
    expect(node22.value).toEqual(22);
    expect(node26.value).toEqual(26);
    expect(node28.value).toEqual(28);
    expect(node26.left).toEqual(null);
    expect(node26.right).toEqual(null);
})