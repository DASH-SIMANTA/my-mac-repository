const numbers = [65,3,43,76,89,94,33];

const student = {
    name: 'Sabib Khan',
    age: 32,
    movies:['king khan', 'Dhakar Don']
}

//1.tamplate string
const about = `His name is ${student.name} age of ${student.age} has number ${numbers[2]} also likes movies ${student.movies}`;
console.log(about);

//2.arrow function

const getFiftyFive = () => 55 ;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath =(num1, num2) =>{
    const sum =num1 + num2;
    return sum;
}

//spread operator
const newNumbers = [...numbers];
numbers.push(99);
console.log(numbers);
console.log(newNumbers);

//create a new array from an older array and add an element
const currentNumbers =[...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);


