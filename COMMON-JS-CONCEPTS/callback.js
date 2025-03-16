//jokhon ekta function k parameter hishabe pathano hoi take callback function bole


function greeting(greetingHandler,name){
    // console.log(person);
    // console.log(greetingHandler());
    greetingHandler(name);
}

const name = 'halim mama';

const numbers = [45, 54, 78];
const laptop = {price: 34000, brand:'lenevo', memory: '8gb'};
// greeting(numbers);
// greeting(laptop);
function greetingHandler(name){
    console.log('good morning', name);
}

function greetingEvening(name){
    console.log('Good Evening', name)
}

greeting(greetingHandler,'tom hanks');
greeting(greetingHandler,'jack hanks');
greeting(greetingEvening,'jerry');
greeting(greetingEvening,'parry');


// document.getElementById('btn-submit').addEventListener('click',function(){
//     console.log('submit button clicked');
// })
// or
function submitHandler(){
    console.log('submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click',submitHandler)