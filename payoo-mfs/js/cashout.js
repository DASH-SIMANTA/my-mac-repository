// console.log('cashout')
document.getElementById('btn-cashout-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();
    console.log('money add button clicked');
    //s-2
    const cashAmountInput = document.getElementById('cashout-input').value;
    console.log(typeof cashAmountInput);
    const pinInput = document.getElementById('cashout-pin').value;
    //get the pin number provided
    console.log(pinInput);

    //add validation
    if(pinInput==='1234'){
        console.log('Cash out money from your account');
        //s-4: get the current balance
        const balance =document.getElementById('account-balance').innerText;
        console.log(balance);
        //s-5:add addMoneyInput with balance
        const newBalance =parseFloat(balance)  - parseFloat(addAmountInput);
        console.log(newBalance);
        //s-6:
        //update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to cash out money! Please try again later');
    }


})