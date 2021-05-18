function subarraySum(arr=[]) {
    const maxUntilkthItem = [...arr];

    for (let [index, item] of maxUntilkthItem.entries()) {
        if (index === 0) continue;
        maxUntilkthItem[index] = Math.max(item, item + maxUntilkthItem[index - 1]);
    }

    return Math.max(...maxUntilkthItem);
}

module.exports = { subarraySum }