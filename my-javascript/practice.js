// Arrey
const numbers = [1,2,3,4,5]
console.log(numbers.length) 

// index
console.log(numbers)
console.log(numbers[2])
//set or update element value by index
let abc =45;
abc=99;
numbers[1]=999;
console.log(numbers)

//push pop--> to add element
const ages=[];
const number=[12,87,98,45];
console.log(number);
number.push(44);
console.log(number);
number.push(11,12,13,14);
console.log(number);
number.push('19');
console.log(number);
//last element will be removed from arrey using pop
//if it is empty, undefined is returned 
const friends=['aa', 'bb', 'cc', 'dd', 'ee'];
console.log(friends);
const out1=friends.pop();
console.log(friends);

//shift--> removes the first element of arrey
friends.shift();
console.log(friends);
//unshift-->Inserts new elements at the start of an array
friends.unshift('ghum')
console.log(friends);
//Determines whether an array includes a certain element, returning true or false as appropriate.

//includes case sensitive 

console.log(friends.includes('ghum'));


if(friends.includes('ghum')){
    console.log('party');
}
else{
    console.log('no food .we are fasting');
}
//Find index of any element
console.log(friends.indexOf('ghum'));

//17-4>>isArrey-->check arrey or not
const nums =[];
const food ='ros o gol a';
console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));

//--> join()
const apps=['Insta', 'FB', 'Snap', 'Thread', 'youtube']
console.log(apps.join());
console.log(apps.join('|'));
console.log(apps.join('+'));
console.log(apps.join('-'));

const data1=['Apple', 'Google', 'OpenAI'];
const data2=['LV', 'MK', 'HNM'];
const result= data1.concat(data2);
console.log(result);

// Slice()
const pizza=['a','b','c','d','e','f']
console.log(pizza.slice(2,4));



// Module 18: Fundamental Concepts of Loops

// const : value will not change
// var : we should not use it

const loopNumber =[12, 98, 45, 63, 21, 72];
console.log(loopNumber);

for(const nums of loopNumber){
    console.log(nums);
}


let numm=0;

while(numm <5){

    console.log('looping', numm);
    // numm =numm +1;
    // numm +=1;
    numm++;

}


// Sum using while loop


let num=1;
let sum=0;
while(num <10){

    console.log(num);
    sum=sum +num;
    console.log(sum);
    num++;
}
//18-3>> Even number 
let nuum =1;
while(nuum<=10){
    console.log(nuum);
    if(nuum % 2 === 0){
        console.log('even number', nuum);
    }
    nuum++;
}

//next 18-4>>Intro for loop
 for (let i=0; i<10; i++){

    console.log(i);
 }



//  18_5 Problem Solving With For Loop

let suum = 0;
for (let i=1; i<=20; i++){
    suum=suum + i;
    console.log(i);
 }
 console.log('sum of number:' ,suum);


//decremental loop

let ssum = 0;
for (let i=20; i>=11; i--){
   
    console.log(i);
 }
 
 let n=10;
 while(n >=0){

    console.log(n);
    n--;
 }
//odd number

for(let i=0; i<20; i++){
    if(i%2===1){
        console.log(i);
    }  
}


//give me the list numbers between 1 to 30 which are devisable by 5

for(let i=1; i<=30; i++){
    if(i%5 === 0){
        console.log(i);
    }  
}

//give me the sum of numbers from 1 to 20 that are divisible by 3 

let total=0;
for(let i=1; i<=20; i++){
    if(i%3===0){
        console.log(i);
        total = total + i;
    }
}

console.log('total of the numbers', total);


//Next_18_7>>when to use a break and continue


let =54;
while(n>25){
    console.log(n);
    if(n<50){
        break;
    }
    console.log(n);
    n--;

}
//continue >> skip rest of this code for this iteration

for(let i=1; i<10; i++){
    if(i%2 === 1){
        continue;
    }
    console.log(i);
}

 //using while loop 
  let ns =0;
  while(ns<50){
    ns++;
    if(ns%5 !==0){
        continue;
    }
    console.log(n);
  }

//18-8 >>  Do_while_loop
//   let a = 0;
//   while(a < 5){
//     consoler.log(a);
//     a++;
//   }


 let b = 10;
  do{

    console.log(n);
    n++;

  }
  while(n<5)


//18_9 Difference Between Types Of Loops Module Summary 


// 19_1 Introduction To String And String Vs Array
 const country = 'Bangladesh';
 const division = "Dhaka";
 const district= `B-baria`;
 const thana = new String('Demra');

 console.log(thana)


 const numberss =[54,64,74,21,31];
 console.log(numberss.length);
 console.log(numberss[1]);
 numberss[1]= 11;
 console.log(numberss);

 //string is immutable--> not changeable 
 //arrey is mutable --> you can change the arrey elements

 const capital ='Dha ka';
 console.log(capital.length);
 console.log(capital[1]);
//can not change element for string
 capital[0]='F';



//  19_2 String Comparison Lowercase Uppercase And Trim
const school='Rajuk UK Model College';
console.log(school);
console.log(school.toLowerCase);
console.log(school.toUpperCase);

const subject ='Chemistry';
const book='chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am chemistry lover');    
}
else{
    console.log('hudai bhal lage na chemistry');
}


const drink='water';
const liquid='  water  ';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam jibon');
}
else{
    console.log('somudrer pani khaite pari na');
}



//19_3 String slice,join, concat and includes

//slice
//0,1,[2,3,4,5],6,7

const address='andorkilla';
const part = address.slice(2-5);
console.log(part);

const sententence = 'i am a good and hardworking person';
// console.log(sententence.split())

console.log(sententence.split('a'))


const bondhus = 'rahim, tahim, dahim,fahim,kahim,bahim';
const bondhu = bondhus.split(',');
console.log(bondhu);
const realFriend = ['rahim', 'tahim', 'dahim','fahim','kahim','bahim'];
// console.log(realFriend);
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));


//concat

const first = 'Abid';
const last = 'nabid';


const fullname = first + ' '+ last;

console.log(fullname);
// const fullname2 = first.concat(last);
const fullname2 = first.concat(' ').concat(last);
console.log(fullname2);

//includes
//check if last name has d or not
console.log(last.includes('d')); //true
console.log(last.includes('x')); //false




































