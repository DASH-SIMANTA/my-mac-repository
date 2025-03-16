//primitive types are pass by value

num1 = 5;
num2 = 7;

function multiply(a, b){
    //primitive type er value function er moddhe change korle outside scope a j value ache ta change korte pare na 
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);//value will not change

const output = multiply(num1, num2);
console.log(output);

//non-primitive a value changeable
//object and array are pass by reference
let student1 = { name: 'simanta', partner: 'unknown'};
let student2 = { name: 'Shahid', partner: 'karina'};
 function makeMovie(couple1, couple2){
    couple1.name = 'shahrukh';
    couple2.name = 'kajol';
 }


 console.log(student1, student2);

 makeMovie(student1, student2);

 console.log(student1, student2);
