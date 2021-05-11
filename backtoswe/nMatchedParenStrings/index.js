function _generate(openingLeft, closingLeft, curString='', all=[]) {
    if (openingLeft === 0 && closingLeft === 0) {
        all.push(curString);
        return;
    }

    let possibleMoves = ['(', ')'];

    if (openingLeft === closingLeft) possibleMoves = ['(']
    else if (openingLeft === 0) possibleMoves = [')']

    for (let nextMove of possibleMoves) {
        newOpeningLeft = nextMove === '(' ? openingLeft - 1 : openingLeft;
        newClosingLeft = nextMove === ')' ? closingLeft - 1 : closingLeft;

        _generate(
            newOpeningLeft, newClosingLeft, curString + nextMove, all
        );
    }
}

function generate(n) {
    const all = [];

    _generate(n, n, '', all);

    return all;
}

module.exports = { generate }