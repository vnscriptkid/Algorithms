function countRanTimes(fn) {
    count = 0;

    return function(...args) {
        count++;
        console.log(`** Ran: ${count}`);
        return fn.call(this, ...args)
    }
}

function findMinNumOfCoins(coins, target, cache={}) {
    if (target === 0) return 0;

    if (target in cache) return cache[target];

    let min = Infinity;
    let coinIncluded;
    for(let coin of coins) {
        if (target - coin >= 0) {
            coinIncluded = 1 + findMinNumOfCoins(coins, target - coin, cache);
            if (coinIncluded < min) min = coinIncluded;
        }
    }

    cache[target] = min;

    return min;
}

findMinNumOfCoins = countRanTimes(findMinNumOfCoins);

module.exports = { findMinNumOfCoins }