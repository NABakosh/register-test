const register = document.querySelector('.reg');
const login = document.querySelector('.login');

function on(formType){
    if (formType === 'register'){
        register.style.display = 'flex';
        login.style.display = 'none';
    }
    else{
        register.style.display = 'none';
        login.style.display = 'flex';
    }
}