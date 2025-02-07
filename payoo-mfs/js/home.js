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
    console.log(typeof addAmountInput);
    const pinInput = document.getElementById('pin-input').value;
    //get the pin number provided
    console.log(pinInput);

    //add validation
    if(pinInput==='1234'){
        console.log('Adding money to your account');
        //s-4: get the current balance
        const balance =document.getElementById('account-balance').innerText;
        console.log(balance);
        //s-5:add addMoneyInput with balance
        const newBalance =parseFloat(balance)  + parseFloat(addAmountInput);
        console.log(newBalance);
        //s-6:
        //update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! Please try again later');
    }


})