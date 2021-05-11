function countRanTimes(fn) {
    count = 0;

    return function(...args) {
        count++;
        // console.log(`** Ran: ${count}`);
        fn.call(this, ...args)
    }
}

function _generateSubSets(n, k, curNumber, partialSubset=[], allSubsets=[]) {
    if (partialSubset.length === k) {
        allSubsets.push(partialSubset.join(''));
        return;
    }

    const spaceLeft = k - partialSubset.length;

    for (let possibleVal = curNumber; possibleVal <= n && spaceLeft <= (n - possibleVal + 1); possibleVal++) {
        partialSubset.push(possibleVal);
        _generateSubSets(n, k, possibleVal + 1, partialSubset, allSubsets);
        partialSubset.pop()
    }
}

_generateSubSets = countRanTimes(_generateSubSets);

function generateSubSets(n, k) {
    const all = [];

    _generateSubSets(n, k, 1, [], all);

    return all;
}


module.exports = { generateSubSets }