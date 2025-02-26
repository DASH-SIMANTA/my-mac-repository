//always use ===
//equal comparison does not work for non-primitive


const first = 2;
const second = 2;

const first4 = [];
const second4 = [];

const first5 = {};
const second5 = {};

const second1 = '2'; 
const second2 = true; //1 converted
const second3 = false; //0 converted
// if(first === second){}
if(first == second){

    console.log('value is equal');

}
else{
    console.log('value is not equal');
}
//type coercion
//type conversion
//type casting