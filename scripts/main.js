// get average price of items array
const averageCost = arr => {
    // get prices from objects inside items array
    const prices = arr.map(e => e.price);
    // average prices
    let result = prices.reduce((a, b) => a + b) / prices.length;
    //formats price to standard USD format
    result = '$' + result.toPrecision(4);
    console.log(`The average price is ${result}`);
    return result;
}
averageCost(items);

// get array of items from items array that cost between $14.00 and $18.00
const inBetweenCost = (arr, low$, high$) => {
    //check what prices are less than and above given values and pass into result array
    const results =
    items.filter(e => e.price > low$ && e.price < high$);
    console.log(results);
    return results;
}
inBetweenCost(items, 14, 18);


// find the items with a 'GBP' currency code and print its name and price
const findGBP = arr => {
    // check each item's currency_code for GBP
    const brit = arr.find((e) => e.currency_code === 'GBP');
    console.log(`${brit.title} costs £${brit.price}`);
    return `${brit.title} costs £${brit.price}`;
}
findGBP(items);

