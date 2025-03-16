print5();
print10();


//do not use var ,cz i er value hoist kore fele
for( var i = 0; i< 5;i++){
    console.log(i);
}

// console.log('outside', i);

//use let
for( let i = 0; i< 5;i++){
    console.log(i);
}


function print5(){
    console.log('inside print5',5);
}
//const upore uthai na
// const print10 = function print10(){
//     console.log('inside print10',10);
// }


//undefine
var print10 = function print10(){
    console.log('inside print10',10);
}


