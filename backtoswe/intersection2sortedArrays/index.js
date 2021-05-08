function findIntersection(arr1, arr2) {
    let p1 = 0, p2 = 0;
    const output = new Set();

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            output.add(arr1[p1]);
            p1++; p2++;
            continue;
        }

        if (arr1[p1] < arr2[p2]) p1++
        else p2++;
    }

    return Array.from(output);
}

module.exports = { findIntersection }