//20_5
function isEven(number){
    if(number  % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
function isOdd(number){
    if(number  % 2 ===1){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isOdd(7));