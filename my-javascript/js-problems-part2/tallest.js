const hights = [65,66,23,445,45,22,11,788,997];
function getMax(numbers){
    // console.log(numbers);
    let max = numbers[0];
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const max = getMax(hights);
console.log(max);


//homework : min number