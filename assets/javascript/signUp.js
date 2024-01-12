import { required } from './module/validation.js';
;(function(){
    const field = document.querySelectorAll('.field');
    const signUpBtn = document.querySelector('#signUp-btn');
    // password
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    // 
    const country = document.querySelector('#country');
    
    signUpBtn.addEventListener('click', () => {
        field.forEach((item) => {
            required(item);
        });
        // password 

        // confirm password function
        if(password.value !== confirmPassword.value ) {
            swal.fire({
                // title: "Good job!",
                text: "密碼錯誤",
                icon: "error",
                button: "確定"
            });
        }
    })
    // input keyup remove class error or shake
    field.forEach(input => {
        input.addEventListener('keyup', () => {
            required(input);
        })
    });
    // 

    // country change remove class error or shake
    country.addEventListener('change' , () => {
        country.parentNode.classList.remove('error', 'shake');
    });
})(); 