const {Node} = require('./Node')

function convert(linkedList) { // evens -> odds
    let evenTail = new Node(); 
    let oddHead = oddTail = new Node();

    let cur = linkedList.getHead();
    let count = 0;

    while (cur) {
        if (count % 2 == 0) { // even nodes
            evenTail.next = cur;
            evenTail = cur;
        } else { // odd nodes
            oddTail.next = cur;
            oddTail = cur;
        }

        // next
        cur = cur.next;
        count++;
    }

    evenTail.next = oddHead.next;
}

function convert2(linkedList) { // evens -> odds
    let evenTail = linkedList.getHead();
    let oddHead = oddTail = null;

    if (evenTail && evenTail.next) {
        oddHead = oddTail = evenTail.next;
    }

    while (oddTail && oddTail.next) {
        evenTail.next = oddTail.next;
        evenTail = oddTail.next;

        oddTail.next = evenTail.next;
        oddTail = evenTail.next;
    }

    evenTail.next = oddHead;
}


module.exports = {convert2, convert}