let a = 5;
let b = 7;
console.log(a,b);
// a = b;
// b = a;
const temp = a;
a = b;
b = temp;
console.log(a,b);
//----------------------------

let x = 5;
let y = 7;
[x,y] = [y,x];
console.log(a,b);