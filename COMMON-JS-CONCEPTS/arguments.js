//arguments array like object
//arguments is not an array thats why we can not push but we can use for of

function sum(a, b, c){
    // console.log(arguments);
    // console.log(arguments[4]);
    // arguments.push(45); //can't use push
    // const args =[...arguments];
    console.log(args);
    console.log(typeof arguments);
    const result = a + b + c;
    return result;
}
//function er bahire arguments kaj kore na
// console.log(arguments);

const total = sum(12, 33, 44, 55, 66, 99);

// console.log(total);

// console.log(typeof sum);
//sum is a function and we get the parameter length using length
console.log(sum.length);