const numbers= [1,2,3,4,5,6,7,8,9,];
const reversed=numbers.reverse();
console.log(reversed);


const rev_number=[];
for(const num of numbers){
    console.log(num);
    // rev_number.push(num);
    rev_number.unshift(num);
}
// console.log(rev_number);

//reverse side 
for (let i=numbers.length-1; i>=0; i--){
    const num= numbers[i];
    console.log(num);
}