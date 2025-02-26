/*
 8 ways to get undefined
 1. variable that is not initialized will give you  undefined
 2.function with no return
 3.parameter that is not passed is undefined
 4.if return has nothing on the right side will return undefined
 5.if property that does not exist on an object will give you undefined 
 6.accessing array elements outside of the index range
 7.deleting an element inside an array
 8.set a value directly to undefined
 */

 let first;

 function second(a,b){
    const total= a+ b;
 }

 const result =second();

 function third(a,b,c,d){
    const total = a+b+c+d;
    // console.log(a,b,c,d);
 }

 third(2, 5);



// console.log(result);

function noNegative(a,b){
    if(a<0 || b<0){
        return;
    }
    return a + b ;
}

const total = noNegative(2,5);
// console.log(total);

//5.
const fifth ={id:3, name: 'ponchom',age: 34};

// console.log(fifth.age, fifth.salary);

const sixth = [22,433,21,13,11,34,46,68,70];
// you should not do it .Instead use splice
delete sixth[1]; 
// console.log(sixth[0],sixth[4],sixth[100]);

const eighth = undefined;
const ninth = null;

const data = {results: [], updated: null}

console.log(typeof undefined);
console.log(typeof null);

