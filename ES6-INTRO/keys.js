const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12,
    isCleaned: true
};


// console.log(glass);

//all property name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);
//all value of property
const values = Object.values(glass);
// console.log(values);
// [ 'glass', 'golden', 12, true ]

const pair = Object.entries(glass);
//array of array, two dimensional array
//[
// [ 'name', 'glass' ],
// [ 'color', 'golden' ],
// [ 'price', 12 ],
// [ 'isCleaned', true ]
// ]
// console.log(pair);

delete glass.isCleaned(glass);
//isClean bade baki gula 
const {isCleaned,...shortGlass} =glass;
console.log(shortGlass);

//freeze
//freeze kora thakle add property add or remove kora jabe na

// Object.freeze(glass);
glass.source = 'Made in  bangladesh';
glass.price = 5000;
console.log(glass);

//seal
//only modify kora jabe , new kichu add or remove kora jabe na

Object.seal(glass);
glass.source = 'Made in  bangladesh';
glass.price = 5000;
console.log(glass);





