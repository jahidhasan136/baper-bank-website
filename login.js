document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email-field');
    const emailValue = email.value;
    const password = document.getElementById('password-field');
    const passwordValue = password.value;
    if(emailValue === 'jh3495689@gmail.com' && passwordValue === '0187'){
        window.location.href = 'get-money.html'
    }
    else{
        alert('thik pass de or email also')
    }
})