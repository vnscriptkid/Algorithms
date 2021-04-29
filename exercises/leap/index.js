function leap(startYear, endYear) {
    let count = 0;

    for (let year = startYear; year <= endYear; year++) {
        if (year % 400 === 0) {
            count++;
        } 
        else if (year % 100 !== 0 && year % 4 === 0) {
            count++;
        }
    }

    return count;
}

module.exports = {leap}