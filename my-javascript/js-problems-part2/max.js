const disha = 56;
const salman = 98;
 if(disha> salman){
    console.log('Dishsha will get the stroberry');
 }
 else{
    console.log('Salman will eat the strawberry');
 }


 //inside a function
 function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
 } 

 const max1 = getMax(96,79);
 const max2 = getMax(23,234);
 console.log(max1,max2);
 const ultimateMax = getMax(max1,max2);
 console.log('Max of two is',ultimateMax);
 