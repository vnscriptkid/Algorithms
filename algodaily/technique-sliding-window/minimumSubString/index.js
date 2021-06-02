function buildCharMap(str) {
    const charMap = {};

    for (let char of str) {
        charMap[char] = (char in charMap) ? charMap[char] + 1 : 1;
    }

    return charMap;
}

function minimumSubString(str, target) {
    // init pointers, count to keep track of current substring and how many left
    let left = right = 0;
    let count = target.length;
    let charMap = buildCharMap(target);

    let curChar;
    
    while (right < str.length) {
        curChar = str[right];
        if (curChar in charMap && charMap[curChar] > 0) {
            count--;
            charMap[curChar] -= 1;
        }

        // in case found enough
        while (count == 0) {
            // reduce window size to optimize result
            if (!(str[left] in charMap)) left++;
            else return str.substring(left, right + 1);
        }
        
        right++;
    }

    // ran out of options
    return null;
}

module.exports = { minimumSubString }