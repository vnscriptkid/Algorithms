// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    if (n === 0) return list.getLast();

    behind = list.getFirst();
    ahead = list.getFirst();
    stepsAway = 0;

    while (stepsAway < n) {
        ahead = ahead.next;
        stepsAway++;
    }

    while (ahead && ahead.next) {
        ahead = ahead.next;
        behind = behind.next;
    }

    return behind;
}

module.exports = fromLast;
