//show cash out button
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    //show cash out button clicked
    console.log('show cash out button')
    document.getElementById('cash-out-from').classList.remove('hidden');
    // hide add money form
    document.getElementById('cash-add-money').classList.add('hidden');
})

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    //hide cash out button clicked
    console.log('show add money button')
    document.getElementById('cash-out-from').classList.add('hidden');
    //show add money form
    document.getElementById('cash-add-money').classList.remove('hidden');

})
