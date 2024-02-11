document.addEventListener('DOMContentLoaded', function () {
    const newTenantBtn = document.getElementById('new-tenant-btn');
    const loginBtn = document.getElementById('login-btn');
    const loginField = document.getElementById('login-field');
    const passwordField = document.getElementById('password-field');
    const confirmPasswordField = document.getElementById('confirm-password-field');
    const finishBtn = document.getElementById('finish-btn');
    const registrationForm = document.getElementById('registration');

    loginBtn.addEventListener('click', function () {
        // registrationForm.setAttribute('action', 'login/');
        registrationForm.querySelector('h1').innerText = 'Login';
        registrationForm.querySelector('input[name="name"]').style.display = 'none';
        registrationForm.querySelector('input[name="surname"]').style.display = 'none';
        registrationForm.querySelector('input[name="email"]').style.display = 'none';
        registrationForm.querySelector('input[name="reg-confirm"]').style.display = 'none';
        // confirmPasswordField.style.display = 'none';
        loginField.setAttribute('name', 'log-login')
        passwordField.setAttribute('name', 'log-password')

        loginField.style.display = 'block';
        passwordField.style.display = 'block';

        finishBtn.innerText = 'Login';
    });

    newTenantBtn.addEventListener('click', function () {
        // registrationForm.setAttribute('action', 'registration/');
        registrationForm.querySelector('h1').innerText = 'Input the data of the tenant';
        registrationForm.querySelector('input[name="name"]').style.display = 'block';
        registrationForm.querySelector('input[name="surname"]').style.display = 'block';
        registrationForm.querySelector('input[name="email"]').style.display = 'block';
        loginField.setAttribute('name', 'reg-login')
        passwordField.setAttribute('name', 'reg-password')
        loginField.style.display = 'block';
        passwordField.style.display = 'block';
        confirmPasswordField.style.display = 'block';
        finishBtn.innerText = 'Finish';
    });

    finishBtn.addEventListener('click', function () {
        if (finishBtn.innerText === 'Finish') {
            // registrationForm.setAttribute('action', 'registration-url/');
            registrationForm.querySelector('h1').innerText = 'Input the data of the tenant';
            registrationForm.querySelector('input[name="name"]').style.display = 'block';
            registrationForm.querySelector('input[name="surname"]').style.display = 'block';
            registrationForm.querySelector('input[name="email"]').style.display = 'block';
            loginField.style.display = 'none';
            passwordField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
            finishBtn.innerText = 'Finish';
            // window.location.href = 'login-url/';
        } else if (finishBtn.innerText === 'Login') {
            // registrationForm.setAttribute('action', 'login-url/');
            registrationForm.querySelector('h1').innerText = 'Login';
            registrationForm.querySelector('input[name="name"]').style.display = 'none';
            registrationForm.querySelector('input[name="surname"]').style.display = 'none';
            registrationForm.querySelector('input[name="email"]').style.display = 'none';
            loginField.style.display = 'block';
            passwordField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
            finishBtn.innerText = 'Login';
        }
    });
});

