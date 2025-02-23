//data access

const data = [{id: 1, name: 'abul', address: 'kocghu khet'}];


console.log(data[0].address);

const products = {
    count: 50000,
    data: [
        {id: 1, name: 'macbook', price: 1650000},
        {id: 2, name: 'Hp laptop', price: 650000},
    ]
}
///second product price
console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.first)

const user2 ={
    id: 50002,
    name: 'babon',
    address: {
        city: 'chittogram',
        country: 'bangladesh'
    }
}

console.log(user2.address.street?.city)