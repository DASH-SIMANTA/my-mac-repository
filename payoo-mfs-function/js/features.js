document.getElementById('show-add-money-form').addEventListener('click',function(event){
    // event.preventDefault();
    ShowSectionById('add-money-form');
    

});

document.getElementById('show-cash-out-form').addEventListener('click',function(){
    ShowSectionById('cash-out-form');
});

document.getElementById('show-transaction-form').addEventListener('click',function(){
    ShowSectionById('transaction-form');
});