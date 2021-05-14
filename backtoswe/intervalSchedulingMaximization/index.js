function sortIntervalsByEndTime(intervals = []) {
    intervals.sort((interval1, interval2) => interval1[1] - interval2[1]);
}

function maximizeIntervals(intervals) { // [ [startTime, endTime] ]
    sortIntervalsByEndTime(intervals);

    let count = 1;
    let curStartTime, prevEndTime;
    let prevInterval = intervals[0];

    for(let [index, interval] of intervals.entries()) {
        if (index === 0) continue;

        prevEndTime = prevInterval[1]
        curStartTime = interval[0];

        if (curStartTime >= prevEndTime) { // no overlapping
            count++;
            prevInterval = interval;
        }
    }

    return count;
}

const intervals = [
    [ 0, 3 ],
    [ 0, 6 ],
    [ 0, 17 ],
    [ 5, 10 ],
    [ 7, 11 ],
    [ 11, 15 ],
    [ 12, 18 ],
    [ 20, 22 ],
    [ 19, 23 ],
];

const result = maximizeIntervals(intervals);

module.exports = { maximizeIntervals, sortIntervalsByEndTime }
