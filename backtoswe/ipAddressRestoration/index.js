function isValidSegment(segment) {
    const number = parseInt(segment);
    return !isNaN(segment)
        && number <= 255
        && number >= 0
        && number.toString().length === segment.length
}

function _findCorrectIpAddresses(token, curIndex=0, segments=[], all=[]) {
    const scanFinished = curIndex === token.length;
    const enoughSegments = segments.length === 4;

    if (scanFinished && enoughSegments) {
        all.push(segments.join('.'));
    } 
    
    else if (!scanFinished && !enoughSegments) {
        for (let segmentLength of [1,2,3]) {
            let segment = token.substr(curIndex, segmentLength);
            if (isValidSegment(segment)) {
                segments.push(segment);
                _findCorrectIpAddresses(token, curIndex + segmentLength, segments, all)
                segments.pop();
            } 
            else continue;
        }
    }

}

function findAll(token) {
    const all = [];

    _findCorrectIpAddresses(token, 0, [], all);
    
    return all;
}

const result = findAll('25525511135');

module.exports = { findAll, isValidSegment }