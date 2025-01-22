//19_8
const mobile ={
    brand:'samsung',
    ram:512,
    rom:'1 Tb',
    color:'black',
    camera:'12mega pixel',
    price:25000
}
//for of: array
//for in: object
for(const prop in mobile){
    console.log(prop)
    // console.log(mobile[prop])
}

const keys=Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key,':', mobile[key])
}