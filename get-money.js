document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.innerText;
    const amountFloat = parseFloat(depositAmountValue);

    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const fieldFloat = parseFloat(depositFieldValue);

    depositField.value = '';

    const totalAmoutValue = amountFloat + fieldFloat;
    depositAmount.innerText = totalAmoutValue;

    const balance = document.getElementById('total-balance');
    const balanceValue = balance.innerText;
    const balanceFloat = parseFloat(balanceValue);

    const totalbalance = balanceFloat + fieldFloat;
    balance.innerText = totalbalance;
    
});


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldFloat = parseFloat(withdrawFieldValue);
    
    const withdrawAmout = document.getElementById('withdraw-amount');
    const withdrawAmoutValue = withdrawAmout.innerText;
    const withdrawAmoutFloat = parseFloat(withdrawAmoutValue);

   
    
    withdrawField.value = '';
    
    const withdrawBalance = document.getElementById('total-balance');
    const withdrawBalanceValue = withdrawBalance.innerText;
    const withdrawBalanceFloat = parseFloat(withdrawBalanceValue);
    
    if(withdrawFieldFloat > withdrawBalanceValue){
        alert('Your withdrawal amount is more than your total amount')
        return;
    }

    const totalWithdraw = withdrawFieldFloat + withdrawAmoutFloat;
    withdrawAmout.innerText = totalWithdraw;

    const withdrawTotalAmount = withdrawBalanceFloat - withdrawFieldFloat;
    withdrawBalance.innerText = withdrawTotalAmount;
    

});

