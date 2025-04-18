// How to declare a variable using let and const
const fatherName ='Jhon';

let season ='rainy';
season ='winter';

//6 basic conditions >,<, ===, !==, <=, >=
// multiple conditions: &&, ||

if(fatherName =='Jhon' || season =='rainy'){

}
else if(fatherName ==='Jhon'){

}
else{

}

// 3. array declare
// index,
// length,push,
const numbers = [65,3,43,76,89,94,33];
numbers[0] = 56;
// for loop
for(let i= 0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5.function
function multiply(num1,num2){
    const result =num1 * num2;
    return result;
}
const output = multiply(23, 2);
// 6. object
const student = {
    name: 'Sabib Khan',
    age: 32,
    movies:['king khan', 'Dhakar Don']
}
const myVariable = 'age';
console.log(student.age); //direct by property
console.log(student['age']);//access via property name string
console.log(student[myVariable])
