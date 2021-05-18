function eraseOverlaps(intervals=[]) {
    let overlaps = 0;
    // sort by endtime
    intervals.sort(([s1, e1], [s2, e2]) => e1 - e2);
    // loop through sorted array, +1 for interval that has starttime < endtime of prev interval
    let prevInterval = intervals[0];
    let curStartime, prevEndtime;
    
    for (let [index, interval] of intervals.entries()) {
        if (index === 0) continue;
        curStartime = interval[0];
        prevEndtime = prevInterval[1];

        if (curStartime >= prevEndtime) prevInterval = interval;
        else overlaps++;
    }
    // return result
    return overlaps;
}

module.exports = { eraseOverlaps }