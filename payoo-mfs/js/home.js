//add money to the account
//step-1: add an event handler to the add money button inside the form
//prevent page reload after form submit
// step-2: get money to be added the account balance

document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();
    console.log('money add button clicked');
    //s-2
    const addAmountInput = document.getElementById('add-money-input').value;
    console.log(addAmountInput);
    const pinInput = document.getElementById('pin-input').value;
    //get the pin number provided
    console.log(pinInput);
    


})