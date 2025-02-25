const products =[
    {id: 1, name:'lenevo', price:65000},
    {id:2, name:'macbook', price:450000},
    {id:3, name:'lenevo', price:550000},
    {id:4, name:'dell', price:333999},
    {id:5, name:'hp', price:200000}
]

//map
const names = products.map(product =>product.name)
console.log(names);

const price = products.map(p =>p.price);
console.log(price);

//forEach

products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p =>p.price > 50000);
console.log(expensive);

//find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

//reduce
const total =products.reduce((accum , current) =>accum + current,0);
console.log(total);