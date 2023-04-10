const item ={
    "item1":10,
    "item2":20,
    "item3":30
};

const exchangeToINR = 80;

const rupeePrice = Object.fromEntries(
   Object.entries(item).map(([key,value])=>[key,value*exchangeToINR])
);

console.log(rupeePrice);