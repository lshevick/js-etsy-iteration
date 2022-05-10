// get average price of items array
const averageCost = arr => {
    // get prices from objects inside items array
    const prices = arr.map(e => e.price);
    // average prices
    let result = _.mean(prices);
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
    items.filter(e => _.inRange(e.price, low$, high$));
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

//find which items are made out of wood
const isWood = arr => {
    // filter items by materials including wood
    const results = arr.filter(e => e.materials.includes('wood'));
    console.log(results);
    return results;
}
isWood(items);

//find which items are made from eight or more materials
const eightOrMore = arr => {
    // get items made from 8 or more materials
    let items = arr.filter(e => e.materials.length >= 8);
    // print title and material list
    const matList = items.map(e => `${e.title} ${e.materials}`);
    const result = matList.join('\n');
    console.log(result);
    return result;
}
eightOrMore(items);

// get how many items were made by the sellers
const madeBySeller = arr => {
    //filter array for who_made === 'i_did'
    const madeBySeller = arr.filter(e => e.who_made === 'i_did');
    console.log(madeBySeller);
    // return amount of madeBySeller
    const numItems = madeBySeller.length;
    console.log(numItems);
    return numItems;
}
madeBySeller(items);
