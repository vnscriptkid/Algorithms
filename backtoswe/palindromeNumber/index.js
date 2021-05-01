function countDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function isPalindromeNubmer(num) {
    //22
    if (num < 0) return false;
    totalDigits = countDigits(num); // 1
    let mostSignificantDigit = 0, leastSignificantDigit = 0;
    let mask = Math.pow(10, totalDigits - 1); //10

    for (let i = 0; i < Math.floor(totalDigits / 2); i++) {
        mostSignificantDigit = Math.floor(num / mask); 
        leastSignificantDigit = num % 10;

        if (mostSignificantDigit !== leastSignificantDigit) return false;

        num = num % mask;
        num = Math.floor(num / 10);

        mask = Math.floor(mask / 100);
    }

    return true;
}

module.exports = { isPalindromeNubmer, countDigits }