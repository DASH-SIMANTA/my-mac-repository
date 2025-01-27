function multiply(num1, num2){
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        return 'please provide a number';
    }
    // return num1 * num2;
    const mult = num1 * num2;
    return mult;
}


const result = multiply('5','seven');
// console.log(result);


function fullName (first, second){
    if(typeof first !=='string' || typeof second !== 'string'){
        return 'please provide a string';
    }
    // else if(typeof second !== 'string'){
    //     return 'second name should be a string';
    // }
    const full =first +' '+second;
    return full;
}

const full = fullName(5,7);
console.log(full);

function getPrice(product){
    // console.log(typeof product);
    if(typeof product ==='object'){
        return 'please provide an object';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'shirt', price: 35, color: 'blue'})
// console.log(price);


function getSecond(numbers){
    console.log(typeof numbers);
    // console.log(Array.isArray(numbers));

    if(Array.isArray(numbers)===false){
        return 'please provide an Array';
    }
    const second =numbers[1];
    return second;
}

const second= getSecond(2)
console.log(second);