console.log('This is seperate js file');
//option-1: directly set on the html element

//option-2 : add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}


//option-3
const makeBlueButton =document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue ;
console.log(makeBlueButton);
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
//option-3:another
const purpleButton = document.getElementById('make-purple');
    //   console.log('make purple')
    purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
    }