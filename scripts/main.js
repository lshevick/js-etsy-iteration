const averageCost = (arr) => {
    // get prices from objects inside items array
    const prices = arr.map(e => e.price);
    // average prices
    let result = prices.reduce((a, b) => a + b) / prices.length;
    result = '$' + result.toPrecision(4);
    console.log(`The average price is ${result}`);
}
averageCost(items);