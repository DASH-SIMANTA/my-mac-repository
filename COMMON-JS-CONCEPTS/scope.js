function add(a,b){
    const total =a + b;
    console.log(a,b);
    if(b>5){
        const sum = 25 + a + b;
    }
    else{
        const sum = 5 + a + b;
        //var diye declare korle kono block mane na, auto hoisting hoye upore declare hoye jai,const total er upore,eke hoisting bole  
        var current = sum;
    }
    console.log(current);
    return total;
}

add(5, 3);