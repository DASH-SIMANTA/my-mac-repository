
const numbers = [45,65,68,98,79];

for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
console.log(number);
}


for(const number of numbers){
    console.log(number);
}

const products = [
    {id:1, name: 'phone one night',price:9000},
    {id:2, name: 'iphone',price:102000},
    {id:3, name:'oneplus' ,price:99999},
    {id:4, name: 'oppo',price:6000},
    {id:5, name: 'samsung',price:34000},
    {id:6, name:'lg phone' ,price:34567},
    {id:7, name: 'nokia',price:12000},
    {id:8, name: 'nothing phone',price:10800},
]

function matchedProduct(products,search){
    const matched = [];
    for(const product of products){
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProduct(products,'phone');
console.log(result);