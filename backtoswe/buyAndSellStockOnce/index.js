function maxProfit(dayPrices) {
    const maxProfitIfSellAtDays = [0]; // day 0 can't make profit

    for (let [index, priceToday] of dayPrices.entries()) {
        if (index === 0) continue;
        let maxProfitIfSellInYesterday = maxProfitIfSellAtDays[index - 1]

        let diffBetweenTodayAndYesterday = priceToday - dayPrices[index - 1];

        let maxProfitIfSellToday = Math.max(0, maxProfitIfSellInYesterday + diffBetweenTodayAndYesterday)

        maxProfitIfSellAtDays.push(maxProfitIfSellToday);
    }

    return Math.max(...maxProfitIfSellAtDays);
}

function findMaxProfitNaive(dayPrices) {
    let maxProfit = 0;
    let currentMinPrice = dayPrices[0];

    for (let [index, price] of dayPrices.entries()) {
        if (index === 0) continue; // skip day 1, can't make profit

        maxProfit = Math.max(maxProfit, price - currentMinPrice);

        currentMinPrice = price < currentMinPrice ? price :  currentMinPrice;
    }

    return maxProfit;
}

module.exports = {maxProfit, findMaxProfitNaive}