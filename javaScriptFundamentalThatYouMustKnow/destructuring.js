// 1. array destructuring
const numbers =[42, 65];
//const x = numbers[0];
//const y = numbers[1];

//const [x, y] =[42, 65]

const [x, y] =numbers;

function boxify(num1 , num2){
    const nums = [num1, num2];
    return nums;
}
const [first, second] = [90, 34];
// console.log(boxify(90, 34));

const student ={
    name: 'habib khan',
    age: 32,
    movies: ['king khan','bhai jan']
}

const [firstMovie, secondMovie] =student.movies;

//object destructuring

const {name, age} = {name1:'alu', age: 30};
const { name1, age1 }={id: 21, name1:'ifty', age1:26, salary:9000};

const employee ={
    id:'VS code',
    designation: 'assistant programmer',
    machine: 'mac',
    languages: ['html','css',' js'],
    specification:{
        height: 66,
        weight:67,
        address: 'kumerkhali',
        drink: 'water',
        watch:{
            color:'black',
            price: 500,
            brand:'garmin'
        }
    }
}

const {machine, id}= employee;
const {weight, address}= employee.specification;
//optional chaining ?
const {brand} =employee?.specification?.watch;
const [ht,cs,js]=employee.languages;
console.log(ht,cs,js);

