/* This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

If no profit is possible, return $0. */

function best (arr) {
    let profit = 0;
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
               min = arr[j];
            } else {
                if (profit < arr[j] - arr[i]) {
                    profit = arr[j] - arr[i];
                }
            }
        }
    }

    return profit;
}

console.log(best([15, 10, 20, 22, 1, 9]))
// 12 - buy at $10, sell at $22

console.log(best([1, 2, 3, 4, 5]));
// 4 - buy at $1, sell at $5

console.log(best([2, 3, 10, 6, 4, 8, 1]));
// 8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]));
// 2 - buy at $7, sell at $9

console.log(best([0, 100]));
// 100 - buy at $0, sell at $100

console.log(best([5, 4 , 3, 2, 1]));
// 0

console.log(best([100]));
// 0

console.log(best([100, 0]));
// 0
