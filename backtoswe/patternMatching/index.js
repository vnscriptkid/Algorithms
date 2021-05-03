function isMatched(str, pattern) {
    if (str.length !== pattern.length) return false;

    strToPattern = {};
    patternToStr = {};

    const zip = str.split('').map((char, index) => [ char, pattern[index] ]);

    for (let [charInStr, charInPattern] of zip) {
        if (!strToPattern[charInStr]) {
            strToPattern[charInStr] = charInPattern;
        } else if (strToPattern[charInStr] !== charInPattern) {
            return false;
        }

        if (!patternToStr[charInPattern]) {
            patternToStr[charInPattern] = charInStr;
        } else if (patternToStr[charInPattern] !== charInStr) {
            return false;
        }
    }

    return true;
}

module.exports = { isMatched }