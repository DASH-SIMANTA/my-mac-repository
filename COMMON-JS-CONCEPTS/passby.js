//primitive types are pass by value
//pass by value function ekti copy pass kore
//jokhon apni nischit korte chan j function er kaj asol data poriborton korbe na, tokhon pass by value use kora hoi 

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
//jokhon apni function er poriborton ashol object a protifolito korte chan , tokhon pass by reference use kora hoi

let student1 = { name: 'simanta', partner: 'unknown'};
let student2 = { name: 'Shahid', partner: 'karina'};
 function makeMovie(couple1, couple2){
    couple1.name = 'shahrukh';
    couple2.name = 'kajol';
 }


 console.log(student1, student2);

 makeMovie(student1, student2);

 console.log(student1, student2);
