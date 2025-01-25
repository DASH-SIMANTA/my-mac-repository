/**
 * objective: write a function to give me the sum of all numbers in an array
 * step-1:declare a function
 * step-2:call check whether the function is called properly
 * step_3:set a parameter(s)
 * step-4:pas the parameter(s), check wether parameter is passed in a proper format
 * step-5:do the function tasks (step by step)
 */
function sumOfnumbers(numbers){
    // console.log(numbers);
    let sum=0;
    for(const number of numbers){
        console.log(number);
        sum= sum+number;
    }
    return sum;
}
const nums=[12,34,99,72,76]
const sum = sumOfnumbers(nums);
console.log('sum of number is:', sum);