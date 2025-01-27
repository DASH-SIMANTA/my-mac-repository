const prices = [2000,100000,40000,600000,900000,340000];
function getMin(numbers){
    let min =numbers[0];
    for(const num of numbers){
        // console.log(num);

        if (num<min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is',cheap);