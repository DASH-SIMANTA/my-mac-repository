const products =[
    {name: 'laptop', price: 34800, brand: 'lenovo', color:'silver'},
    {name: 'phone', price: 48000, brand: 'onePlus', color:'blue'},
    {name: 'watch', price: 3000, brand: 'casio', color:'gold'},
    {name: 'sunglass', price: 4800, brand: 'reyban', color:'green'},
    {name: 'camera', price: 34800, brand: 'nikon', color:'black'},
    {name: 'bike', price: 334800, brand: 'kawasaki ninja', color:'carbon'}
];

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

//jokhon return korte hobe na tokhon foreach use korbo variable declare korte hobe na
//map ruturn kore forEach kichu return korbe na
products.forEach(product =>console.log(product));
products.forEach(product =>console.log(product.color));
products.forEach(product => {

})

//3.Filter
//kichu condition dibe ,condition jara jara fulfill korbe tader k dibe
//filter ekta array return korbe
const cheap =products.filter(product => product.price <=5000);
console.log(cheap);

const SpecificName =products.filter(p => p.name.includes('n'));
console.log(SpecificName);

// 4. find
const special = products.find(p =>p.name.includes('n'));
console.log(special);