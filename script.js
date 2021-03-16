const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwod match
    if (password1.value === password2.value) {
        passwordMatch = true;
        password1.style.borderColor = '#2696c2'
        password2.style.borderColor = '#2696c2'
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    // if form is valid and password match
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Register!';
        message.style.color = '#2696c2';
        messageContainer.style.borderColor = 'black';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit data if valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);