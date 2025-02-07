//step-1: set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // console.log('login button clicked')
//step-2: prevent default behavior (prevent reloading browser)/to stop reloading browser
    event.preventDefault();
    //step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber);


})