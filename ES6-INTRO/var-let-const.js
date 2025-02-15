//var : no reason to use bar
//let : allow it to reassign
//const : do not allow it to reassign 

const  money = 25;
const rich = money +25;
console.log(rich);

 let count = 0;
 count = count + 10;
 console.log(count);



 const numbers = [23, 44, 54, 33, 22];
 numbers[1] = 55;
 numbers.push(12,343,49);
 console.log(numbers);

//object
 const student = {
    name:'moyna pakhi',
    class: 12
 }

 student.name = 'kokil konthi';
 console.log(student);


 //loop
let sum = 0;
 for(let i= 0; i<10; i++){
    
    sum= sum + i;

 }
