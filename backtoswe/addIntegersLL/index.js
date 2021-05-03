const {LinkedList} = require('./Node');

function add(ll1, ll2) {
    let p1 = ll1.getHead(); 
    let p2 = ll2.getHead(); 
    let digit1=0, digit2=0, carry=0, sum=0;
    const result = new LinkedList();

    while (p1 || p2) {
        digit1 = p1 ? p1.data : 0;
        digit2 = p2 ? p2.data : 0;
        sum = digit1 + digit2 + carry;

        result.addLast(sum % 10);
        carry = Math.floor(sum / 10);

        // next digit
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }


    return result;
}

// const ll1 = new LinkedList();
// ll1.addLast(2);
// ll1.addLast(4);
// ll1.addLast(3);

// const ll2 = new LinkedList();
// ll1.addLast(5);
// ll1.addLast(6);
// ll1.addLast(4);

// add(ll1, ll2);

module.exports = { add }

