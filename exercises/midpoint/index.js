// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// 1st way: my original solution
// function midpoint(list) {
//     if (list.head === null || list.head.next === null) {
//         return list.head;
//     }

//     let slowPointer = list.head;
//     let fastPointer = slowPointer.next;

//     while (true) {
//         if (!fastPointer || !fastPointer.next)
//             break;
//         slowPointer = slowPointer.next;
//         fastPointer = fastPointer.next.next;
//     }
//     return slowPointer;
// }

// 2nd way: shorter one
function midpoint(list) {
    let slowPointer = list.getFirst();
    let fastPointer = list.getFirst();

    while (fastPointer.next && fastPointer.next.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
}

module.exports = midpoint;
