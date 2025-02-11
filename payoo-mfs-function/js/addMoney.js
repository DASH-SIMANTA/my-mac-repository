// console.log('add money loaded')




document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money button clicked');
    // getInputFieldValueById();

    // const addMoney =getInputFieldValueById();
    // console.log('add money value', addMoney);
    // const addMoney = document.getElementById('input-add-money').ariaValueMax;
    // const addMoneyNumber =parseFloat(addMoney);


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;

    }

    //wrong way to verify..do not use at professionally
    // if(pinNumber===1234){

    //     console.log('add money with parameter', addMoney, pinNumber );

    // }
    // else{
    //     alert('Failed to add the money')
    // }
    /////for text
    if(pinNumber===1234){

        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        // console.log(balance,addMoney);

        //add to transaction history
        const p = document.createElement('p');
        p.classList.add('bg-yellow-300');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('Failed to add the money')
    }

    

})