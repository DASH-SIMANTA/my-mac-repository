console.log('This is seperate js file');
//option-1: directly set on the html element
//<button onclick="console.log(65)">Another click</button>

//option-2 : add onclick function
//IMPORTANT: we will use this
//<button onclick="makeRed()">Make Red</button>
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


//option-4:
const pinButton = document.getElementById('make-pink');
        pinButton.addEventListener('click', makePink);
        function makePink(){
            document.body.style.backgroundColor='pink';
        }
//option-4: Another
const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor ='green';
        })
//option-4 Final
//IMPORTANT: WE WILL USE THIS SOMETIMES
  // document.getElementById('make-goldenrod').addEventListener?(function(){})
  document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.background ='goldenrod';

})