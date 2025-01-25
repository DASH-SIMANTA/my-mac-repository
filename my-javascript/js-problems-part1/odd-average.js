/**
 * function takes an array as parameter
 * Give me the average of the odd number of the array
 */
function oddAverage(numbers){
    const odds=[];
    for(const number of numbers){
        if(number % 2 ===1){
            // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum+number;
    }
    const count =odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}
const numbers = [42,13,56,73,37,98];
const avg =oddAverage(numbers);
console.log('Average of the odd number is: ',avg);