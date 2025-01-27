const products = [
    {name: 'shampoo',price:200, quantity:3},
    {name: 'soap',price:300, quantity:1},
    {name: 'conditioner',price:400, quantity:4},
    {name: 'tea',price:600, quantity:7},
    {name: 'chips',price:800, quantity:6},

]


function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost= product.price * product.quantity;
        total= total+ thisProductCost;
    }
    return total;
}
const shoppingCost =cartTotal(products);
console.log(shoppingCost);