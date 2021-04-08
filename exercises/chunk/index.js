// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     return array.reduce((acc, item, index) => {
//         if (index % size !== 0) return acc;
//         const newItem = [];
//         let count = 0;

//         let nextIndex = index;
//         while (count < size && nextIndex < array.length) {
//             newItem.push(array[nextIndex]);
//             count++;
//             nextIndex++;
//         }

//         acc.push(newItem);
//         return acc;
//     }, []);
// }

// function chunk(array, size) {
//     return array.reduce((acc, item, index) => {
//         if (index % size !== 0) return acc;
//         const newItem = array.slice(index, index + size)
//         acc.push(newItem);
//         return acc;
//     }, []);
// }

// function chunk(array, size) {
//     const chunked = [];

//     array.forEach((item, index) => {
//         if (index % size === 0) {
//             chunked.push([]);
//         }
//         chunked[chunked.length - 1].push(item)
//     });

//     return chunked;
// }

// function chunk(array, size) {
//     let index = 0;
//     const chunked = [];
//     while (index < array.length) {
//         const sliced = array.slice(index, index + size);
//         chunked.push(sliced);        
//         index += size;
//     }
//     return chunked;
// }

// [1,2,3]
//  ^
// [[1]]
// if chunked empty -> push [item]
// else if current chunked item is full -> push[item]
// else push to lastChunkedItem

function chunk(array, size) {
    const chunked = [];
    
    array.forEach((item) => {
        const lastChunkedItem = chunked[chunked.length - 1];
        if (!lastChunkedItem || lastChunkedItem.length === size) {
            chunked.push([item]);
        } else {
            lastChunkedItem.push(item);
        }
    });

    return chunked;
}

module.exports = chunk;
