document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Name Validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email Validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Age Validation
        const age = document.getElementById('age');
        const ageError = document.getElementById('ageError');
        if (age.value < 1) {
            ageError.textContent = 'Age must be a positive number.';
            valid = false;
        } else {
            ageError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
