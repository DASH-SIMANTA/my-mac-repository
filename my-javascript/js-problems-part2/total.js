const products = [
    {name: 'shampoo', price:3200},
    {name: 'soap', price:1300},
    {name: 'conditioner', price:400},
    {name: 'tea', price:700},
    {name: 'chips', price:1200}

]

function getTotal(products){
    let total =0;
    for(const product of products){
        total= total + product.price;
    }
    return total;

}

const total= getTotal(products);
console.log(total);