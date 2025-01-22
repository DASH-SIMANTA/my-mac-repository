//19.5_1 Array traversal using For loop and while loop

/**
 * LOOPING TECHNIQUE
 * 1.FOR LOOP
 * 2.WHILE LOOP
 * DO WHILE
 * FOR OF>>ARRAY LOOP
 * FOR IN>>OBJECT LOOP
 */
const friends=['ELON','BILL','MARK','WAREN'];
for(const friend of friends){
    // console.log(friend);
}

for(let i=0;i<10; i++){
    // console.log(i);
    // console.log(friends[i]);
}

const numbers=[5,344,,45,4,55,544,43,34,56,4443,234,4445]
for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
}
let i=0;
while (i<friends.length){
    console.log(friends[i]);
    i++;
}

let n=0;
while(n<numbers.length){
    console.log(numbers[n]);
    n++;
}


