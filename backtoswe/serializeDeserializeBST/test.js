const {Node, serialize, deserialize} = require('./index')

test('serialize works', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.left = node2;
    node1.right = node3;
    node3.left = node4;
    node3.right = node5;

    expect(serialize(node1)).toEqual('1,2,x,x,3,4,x,x,5,x,x')
})

test('deserialize works', () => {
    const root = deserialize('1,2,x,x,3,4,x,x,5,x,x');

    expect(root.value).toEqual('1');
    node2 = root.left;
    node3 = root.right;
    node4 = node3.left;
    node5 = node3.right;

    expect(node2.value).toEqual('2');
    expect(node2.left).toEqual(null);
    expect(node2.right).toEqual(null);
    expect(node3.value).toEqual('3');

    expect(node4.value).toEqual('4');
    expect(node4.left).toEqual(null);
    expect(node4.right).toEqual(null);

    expect(node5.value).toEqual('5');
    expect(node5.left).toEqual(null);
    expect(node5.right).toEqual(null);
})