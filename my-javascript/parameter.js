function vaatKhao(){

    console.log('hand wash kore asho');
}

vaatKhao();

//20_2

//3 -->>3*3 = 9
//4 -->> 4*4 = 16
//5 -->> 5*5 = 25
//11 -->> 11*11 = 121

function square (number){
    console.log('Value of the number parameter', number);
    const borgo = number * number ;
    console.log('square of the given number is: ', borgo)
} 

square(4);
square(12);
square(123);


function add(num1,num2){
    const total=num1+num2;
    console.log(total);
}

add(2,1);
add(123,654);
 function addAll(a,b,c,d,e){

    const total=a+b+c+d+e;
    console.log(total);
 }
 addAll(1,2,3,4,5);

 function doubleIt(number){
    const doubled = number *2;
    console.log(number, doubled);
 }

 console.log('I will call the function');
 //doubleIt(argument);
 doubleIt(17); 
 console.log('--------------');
 doubleIt(9876);
 console.log('--------------');
 doubleIt(765);

 function difference(num1,num2){
    const diff=num1 - num2;
    console.log(num1,num2,'difference is', diff);

 }
  const fatherAge = 40;
  const myAge=10;
  difference(fatherAge,myAge);