const eyePassword = (eye, passwordInput) => {
    eye.addEventListener('click', () => {
        if(passwordInput.type === 'password') {
            password.type = 'text';
            eye.classList.remove('fa-eye-slash','text-gray-400');
            eye.classList.add('fa-eye','text-primary');
        } else {
            passwordInput.type = 'password';
            eye.classList.add('fa-eye-slash','text-gray-400');
            eye.classList.remove('fa-eye','text-primary');
        }
    });
}

export default eyePassword;