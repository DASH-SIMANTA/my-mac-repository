const difference = (x,y) => x - y;

const multiply = (first, second, third) => first * second * third;
//single parameter or one parameter
const getAge =(person) => person.age;

const student = {name: 'simanta dash',age: 30};
const age = getAge(student);
console.log(age);
//single hoile parameter charao hobe
const getThird = numbers => numbers[2];
const third = getThird([5,9,88,14]);
console.log(third);

const doubleIt = num => num * 2;

// no parameter
const getPI = () => math.PI;
console.log(getPI());

//large arrow function

const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y  *z;
    const result = sum + mult;
    return result;
}


