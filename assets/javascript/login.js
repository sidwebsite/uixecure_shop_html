(function(){
    const password = document.querySelector('#password');
    const eyepassword = document.querySelector('#eye-password');

    eyepassword.addEventListener('click', () => {
        if(password.type === 'password') {
            password.type = 'text';
            eyepassword.classList.remove('fa-eye-slash','text-gray-400');
            eyepassword.classList.add('fa-eye','text-primary');
        } else {
            password.type = 'password';
            eyepassword.classList.add('fa-eye-slash','text-gray-400');
            eyepassword.classList.remove('fa-eye','text-primary');
        }
    });
})();