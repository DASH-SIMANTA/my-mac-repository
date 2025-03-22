function checkAge(){
    // console.log('button clicked');
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    // console.log(errorTag)

    try{

        // console.log(bBaria);
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('age not found', age, ageText);
            throw 'please enter a number';
        }
        else if(age < 18){
            throw "baccha kaccha not allowed"
        }
        else if(age > 30){
            throw "murobbi ra dure thaken"
        }
;    }
    catch(err){
        console.log('Error:', err);
        errorTag.innerText ='Error:' + err;
    }
    finally{
       console.log('All done inside try catch');
    }
    console.log('try catch use er jonno error dileo porer output dei')
}