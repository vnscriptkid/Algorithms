const {maximizeIntervals, sortIntervalsByEndTime} = require('./index');

test('maximizeIntervals() works', () => {
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

    expect(result).toEqual(4);
});

test('sort intervals by time', () => {
    const intervals = [
        [ 12, 18 ],
        [ 20, 22 ],
        [ 19, 23 ],
        [ 0, 3 ],
        [ 0, 6 ],
        [ 0, 17 ],
        [ 5, 10 ],
        [ 7, 11 ],
        [ 11, 15 ],
    ];

    sortIntervalsByEndTime(intervals);

    expect(intervals[0][1]).toEqual(3);
    expect(intervals[intervals.length - 1][1]).toEqual(23);
})