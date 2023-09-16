const form = document.getElementById('form')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')

const nameWarning = document.getElementById('name-warning')
const emailWarning = document.getElementById('email-warning')
const passwordWarning = document.getElementById('password-warning')
const password2Warning = document.getElementById('password2-warning')

// Checks validity and sets field styles accordingly

const checkValidity = (input, warning, condition) => {
    if (condition) {
        input.style.border = '2px solid green'
        warning.style.visibility = 'hidden'
    } else {
        input.style.border = '2px solid red'
        warning.style.visibility = 'visible'
    }
}

nameInput.addEventListener('input', e => {
    const condition = e.target.value.trim().length >= 3
    checkValidity(nameInput, nameWarning, condition)
})

emailInput.addEventListener('input', () => {
    const validateEmail = (input) => {
        var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        return regex.test(input);
    }
    const condition = validateEmail(emailInput.value.trim())
    checkValidity(emailInput, emailWarning, condition)
})

passwordInput.addEventListener('input', e => {
    const condition = e.target.value.trim().length >= 6
    checkValidity(passwordInput, passwordWarning, condition)
})

password2Input.addEventListener('input', e => {
    const condition = passwordInput.value.trim() === password2Input.value.trim()
    checkValidity(password2Input, password2Warning, condition)
})
