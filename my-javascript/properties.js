const person= {
    name:'sodor ali',
    age:25,
    profession:'developer',
    salary:25000,
    married: true,
    'fav places': ['bandarbon','saintmartin', 'kuakata']
}
// console.log(person);
//dot notation//dot symbol diye object er property er value k access kora
console.log(person.age);
const income = person.salary;
console.log(income);

//bracket notation
//third bracket diye access kore
console.log(person['age'])
const boyos=person['age'];
console.log(boyos);
const placess=person['fav places'];
console.log(placess);
console.log(person['fav places']);
const keyName= 'profession';
console.log(person[keyName]);



