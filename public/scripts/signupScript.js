(function () {
    'use strict'

    var form = document.getElementById('signupForm')
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        var password = document.getElementById('password')
        var confirmPassword = document.getElementById('confirmPassword')
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.')
        } else {
            confirmPassword.setCustomValidity('')
        }

        form.classList.add('was-validated')
    }, false)
})()