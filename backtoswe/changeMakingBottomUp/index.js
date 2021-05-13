function findMinNumOfCoins(coins, target) {
    const minCoinsSumUpTo = [0];

    let includedCoin = 0;  

    for (let sum = 1; sum <= target; sum++) {
        minCoinsSumUpTo[sum] = Infinity;
        for (let coin of coins) {
            if (sum >= coin) {
                includedCoin = 1 + minCoinsSumUpTo[sum - coin];
                if (includedCoin < minCoinsSumUpTo[sum]) minCoinsSumUpTo[sum] = includedCoin;
            }
        }
    }

    return minCoinsSumUpTo[target];
}

module.exports = { findMinNumOfCoins }