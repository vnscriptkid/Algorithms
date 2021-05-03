const {LinkedList} = require('./Node')

function findOverlap(head1, head2) {
    const seen = new Set();

    let cur;
    // start form head 1
    cur = head1;
    while (cur) {
        seen.add(cur);
        cur = cur.next;
    }
    
    // start from head 2
    cur = head2
    while (cur) {
        if (seen.has(cur)) return cur;
        cur = cur.next;
    }

    return null;
}

function findOverlap2(head1, head2) {
    const ll1 = new LinkedList(head1);
    const ll2 = new LinkedList(head2);

    const diffInSize = Math.abs(ll1.size() - ll2.size());
    const longerLL = ll1.size() > ll2.size() ? ll1 : ll2;
    const shorterLL = ll1 === longerLL ? ll2 : ll1;

    // longerLL catches shorterLL
    let count = 0;
    let curOfLonger = longerLL.head;
    while (count !== diffInSize) {
        curOfLonger = curOfLonger.next;
        count++;
    }

    // now go tandem
    let curOfShorter = shorterLL.head;
    while (curOfShorter && curOfLonger) {
        if (curOfLonger === curOfShorter) return curOfShorter;
        curOfLonger = curOfLonger.next;
        curOfShorter =curOfShorter.next;
    }
    
    return null;
}

module.exports = { findOverlap, findOverlap2 }