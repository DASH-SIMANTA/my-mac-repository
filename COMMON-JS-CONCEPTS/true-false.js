/*
Truthy:
1.true
2. any number (+ve, -ve) will be truthy other then 0
3. any string other then empty string
4. empty object=> {}
5.empty Array []

Falsy:
1.false
2.0
3. '' (empty string)
4.undefined
5. null
*/

// const x = false ;
// const x = 0 ;
// const x = '';
// let x;//undefined
// console.log(x);
let x = null;
let y = {};
let z = {a:'5',b: 55};
let a = [];
let b = [11, 33];

if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is false');
}


//optional
//falsy check

// const f = '';
const f1 = null;
if(!f){
    console.log('value is falsy');

}
else{
    console.log('value is truthy')
}

//check true
const z1 = ' ';
if(!!z1){
    console.log('value is truthy');
}