//strongly typed language

// int a = 5;
// string b= 'alim halim khalim';
// bool c = true;
// object student ={ name: 'noyon chokh', id: 67};
// int[] numbers = [12,33,43,56,44];
// string[] friends =['allu','arjun'];

//javaScript is a dynamic type programming language
//primitive
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;
//non-primitive
const ages = [45, 65, 75];
const students = {id: 1, class: 7};

console.log(typeof a, typeof b, typeof d, typeof ages, typeof students);


let x = 5;
let y = x;
console.log(x,y);

y = 7;
console.log(x,y);

let p = {job:'web developer'};
let q = p;
// console.log(p,q);
// q = {jod:'eee engineer'}

q.job = 'front end developer';

console.log(p,q);





