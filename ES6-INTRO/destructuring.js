const actor = {
    name: 'Ananta',
    age: 30,
    phone: '018143222922',
    money: 12345789098764
}

//if right side is an object then left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age: boyos} = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos);

//array destructuring

const numbers = [65, 34];
const [first, second] = numbers;
const [x, y] = [12,43];
//advance
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditio] = doubleThem(6,9);
console.log(prothom,ditio);
