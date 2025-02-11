//common shared functions here
// console.log('utilities loaded');

// function getInputFieldValueById(){
//     console.log('will get value by id');

//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;

// }


function getInputFieldValueById(id){
    const addMoney = document.getElementById(id).value;
    const inputNumber =parseFloat(addMoney);

    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber =parseFloat(textValue);

    return textNumber;

}
///hide all the section 
function ShowSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    //show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');

}