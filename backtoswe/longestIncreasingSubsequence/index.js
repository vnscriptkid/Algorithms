function lis(arr=[]) {
    const lisTillNow = arr.map(() => 1);

    for (let i = 1; i < arr.length; i++) {
        let j = 0;
        while (j < i) {
            if (arr[i] > arr[j] && (1 + lisTillNow[j]) > lisTillNow[i])
                lisTillNow[i] = 1 + lisTillNow[j]
            j++;
        }
    }

    return Math.max(...lisTillNow);
}

module.exports = { lis }