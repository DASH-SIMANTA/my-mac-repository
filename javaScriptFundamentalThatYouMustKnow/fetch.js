//1.JSON
const student ={
    name: 'habib khan',
    age: 32,
    movies: ['king khan','bhai jan']
}

const studentJSON =JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentOBJ =JSON.parse(studentJSON);
// console.log(studentOBJ);

//2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data =>console.log(data));

//keys/properties, values
const keys = Object.keys(student);
const values= Object.values(student);
console.log(keys,'keys');

//for
const numbers =[23, 54, 67, 87, 32, 56];
numbers.forEach(num=>console.log(num));
numbers.map(num=> num * 2);

// for of on array like object
//loop on an object using for in

//add or remove from an array

const products =[
    {name: 'laptop', price: 34800, brand: 'lenovo', color:'silver'},
    {name: 'phone', price: 48000, brand: 'onePlus', color:'blue'},
    {name: 'watch', price: 3000, brand: 'casio', color:'gold'},
    {name: 'sunglass', price: 4800, brand: 'reyban', color:'green'},
    {name: 'camera', price: 34800, brand: 'nikon', color:'black'},
    {name: 'bike', price: 334800, brand: 'kawasaki ninja', color:'carbon'}
];

const newProduct ={name:'webcam', price: 700, brand: 'lal'};

//copy product array and then add newProduct
const newProducts =[...products, newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone')

