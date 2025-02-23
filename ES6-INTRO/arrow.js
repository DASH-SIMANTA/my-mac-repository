//function declaration
function add(a,b){
    const result = a + b;
    return result;
}

const sum = add(5,90);

function add2(a,b){
    return a + b;
}
const sum2 = add2(5,90);
//function expression
const add3 = function(a, b){
    return a + b;
} 
const sum3 = add3(5,90);

//arrow function
const add4 =(a, b) => a + b ;
const add5 =(num1,num2,num3,num4) => num1+num2+num3+num4;
const multiply =(num1,num2,num3,num4) => num1*num2*num3*num4;
const sum4 = add4(22,33);
const sum5 = add5(33,44,55,66);
const mult = multiply(33,44,55,66);
console.log(sum4);
console.log(sum5);
console.log(mult);
