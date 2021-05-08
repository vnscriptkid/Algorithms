function findNearestRepeatedEntries(arr) {
    const map = new Map();

    let firstIndex, bestDistance=Infinity, bestEntry=null;

    for (let [index, value] of arr.map(i => i.toLowerCase()).entries()) {
        if (map.has(value)) {
            if (index - map.get(value) < bestDistance) {
                bestDistance = index - map.get(value);
                bestEntry = value;
                firstIndex = map.get(value)
                map.set(value, index);
            }
        } else {
            map.set(value, index);
        }
    }

    return bestEntry ? { first: firstIndex, second: map.get(bestEntry), value: bestEntry } : null;
}

module.exports = { findNearestRepeatedEntries }