class Item {
    constructor(volumn, price) {
        this.volumn = volumn;
        this.price = price;
    }

    getRatio() {
        return this.price / this.volumn;
    }
}

function knapsack(capacity, volumes, prices) {
    let left = capacity;
    let totalPrice = 0;

    const sortedList = volumes.map((volumn, index) => new Item(volumn, prices[index]))
        .sort((a, b) => b.getRatio() - a.getRatio() );

    for (let item of sortedList) {
        if (item.volumn <= left) {
            left -= item.volumn;
            totalPrice += item.price;
        }
    }

    return totalPrice;
}

module.exports = { knapsack }