// get average price of items array
const averageCost = (arr) => {
    // get prices from objects inside items array
    const prices = arr.map(e => e.price);
    // average prices
    let result = prices.reduce((a, b) => a + b) / prices.length;
    //formats price to standard USD format
    result = '$' + result.toPrecision(4);
    console.log(`The average price is ${result}`);
}
averageCost(items);

// get array of items from items array that cost between $14.00 and $18.00
const inBetweenCost = (arr, low$, high$) => {
    //check what prices are less than and above given values and pass into result array
    const results =
    items.filter(e => e.price > low$ && e.price < high$);
    console.log(results);
}
inBetweenCost(items, 14, 18);
