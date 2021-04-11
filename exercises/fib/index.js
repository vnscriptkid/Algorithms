// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1st way: Iterative solution using for loop
// function fib(n) {
//     if (n <= 1) return n;
//     let firstNumber = 0;
//     let secondNumber = 1;
//     let currentNumber;
//     for (let i = 2; i <= n; i++) {
//         currentNumber = firstNumber + secondNumber;
//         firstNumber = secondNumber;
//         secondNumber = currentNumber;
//     }
//     return currentNumber;
// }

// 2nd way: Iterative solution using while loop
// function fib(n) {
//     if (n <= 1) return n;
//     let prevOfPrev = 0;
//     let prev = 1;
//     let currentNumberIndex = 2;
//     let currentNumber;
//     while (currentNumberIndex <= n) {
//         currentNumber = prev + prevOfPrev;
//         prevOfPrev = prev;
//         prev = currentNumber;
//         currentNumberIndex++;
//     }
//     return currentNumber;
// }

// 3rd way: Iterative solution using for loop 2
// function fib(n) {
//     const fibArray = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//     }
    
//     return fibArray[n];
// }

// 4th way: Recursive solution
// function fib(n) {
//     if (n <= 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// 5th way: Recursive solution with cache
// function fib(n, cache = {}) {
//     if (n <= 1) return n;

//     if (cache[n]) return cache[n];

//     const fibOfN = fib(n - 1, cache) + fib(n - 2, cache);

//     cache[n] = fibOfN;

//     return fibOfN;
// }

// 6th way: Recursive solution using memoization
// function fibMemoized() {

//     const cache = {};

//     return function fib(n) {
//         if (n <= 1) return n;

//         if (cache[n]) return cache[n];

//         const fibOfN = fib(n - 1) + fib(n - 2, cache);

//         cache[n] = fibOfN;

//         return fibOfN;
//     }
// }

// const fib = fibMemoized();

// module.exports = fib;

// 7th way: Recursive solution using memoization 2

function fib(n) {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
}


function memoize(fn) {

    const cache = {};

    return function (...args) {
        if (cache[args]) return cache[args];

        const result = fn.apply(this, args);

        cache[args] = result;

        return result;
    }
}

fib = memoize(fib);

module.exports = fib;