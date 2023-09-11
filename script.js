const form = document.querySelector('#form')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')

const nameWarning = document.getElementById('name-warning')
const emailWarning = document.getElementById('email-warning')
const passwordWarning = document.getElementById('password-warning')
const password2Warning = document.getElementById('password2-warning')

const button = document.querySelector('#button')

// Checks validity and sets field styles accordingly

const checkValidity = (input, warning, condition) => {
    if (condition) {
        input.style.border = '2px solid red'
        warning.style.visibility = 'visible'
    } else {
        input.style.border = '2px solid green'
        warning.style.visibility = 'hidden'
    }
}

nameInput.addEventListener('input', e => {
    checkValidity(nameInput, nameWarning, e.target.value.trim().length < 3)
})

emailInput.addEventListener('input', () => {
    const validateEmail = (input) => {
        var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        return regex.test(input);
    }
    checkValidity(emailInput, emailWarning, !validateEmail(emailInput.value.trim()))
})

passwordInput.addEventListener('input', e => {
    checkValidity(passwordInput, passwordWarning, e.target.value.trim().length < 6)
})

password2Input.addEventListener('input', e => {
    checkValidity(password2Input, password2Warning, passwordInput.value.trim() !== password2Input.value.trim())
})

form.addEventListener('submit', e => {
    e.preventDefault()
})