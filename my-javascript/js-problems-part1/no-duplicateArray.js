/**
 * Array has some duplicate elements
 */
const biryanikhor=['abul','babul','kabul','dabul','babul','habul'];
const numbers =[11,23,34,23,66,33,22,11,66,99,36];

function noDuplicate(array){
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray);