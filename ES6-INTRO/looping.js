//for of use on array or string not in object
//for in use on object

const numbers = [1,6,8,4];
// for(let i = 0;i< numbers.length; i++){}
//while

for(const num of numbers){
    // console.log(num);
}

const nobab = 'siraj ud doula';

for( const char of nobab){
    // console.log(char);
}

//object

const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12,
    isCleaned: true
}

for(const key in glass){
    const value =glass[key];
    // console.log(key,value);
}

//optional

const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(value);
}