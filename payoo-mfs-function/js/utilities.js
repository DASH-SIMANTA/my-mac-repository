//common shared functions here
// console.log('utilities loaded');

// function getInputFieldValueById(){
//     console.log('will get value by id');

//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;

// }


function getInputFieldValueById(id){
    const addMoney = document.getElementById(id).value;
    return addMoney;
}