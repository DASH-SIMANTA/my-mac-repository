//20_5

function add(price1,price2){
    const total = price1 + price2 ;
    return total;
}

const bill = add(5,53);

function add2 (price1, price2){
    return price1+price2;
}
const bill2 = add2(123,345);
console.log(bill,bill2);

function doMath(num1,num2){
    const sum =num1 + num2;
    const diff=num1 - num2;
    const multimply = sum * diff;
    const result =multimply/2;
    return result;
}

const result= doMath(12,23);
console.log(result);
