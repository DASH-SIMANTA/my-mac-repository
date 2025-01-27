//23_4
const phones =[
    {name: 'samsung', price:100000, camera:'12mp', color:'black'},
    {name: 'Xaomi', price:100000, camera:'12mp', color:'black'},
    {name: 'Oppo', price:100000, camera:'12mp', color:'black'},
    {name: 'Iphone', price:100000, camera:'12mp', color:'black'},
    {name: 'Oneplus', price:100000, camera:'12mp', color:'black'},
    {name: 'Vivo', price:100000, camera:'12mp', color:'black'},
    {name: 'Htc', price:100000, camera:'12mp', color:'black'},
]

function getCheapestPhone(phones){
    // console.log(phones);
    let min= phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }

    }
    return min;
}

const cheap =getCheapestPhone(phones);
console.log(cheap);