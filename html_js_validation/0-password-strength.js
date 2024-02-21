// password.js

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Retrieve the password input value
    var password = document.getElementById('password').value;

    // Validate the password
    if (validatePassword(password)) {
        // If password is valid, allow form submission
        this.submit();
    } else {
        // If password is invalid, display error message
        document.getElementById('error').textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
    }
});

function validatePassword(password) {
    // Password length should be at least 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check for at least one numeric digit
    if (!/\d/.test(password)) {
        return false;
    }

    // Check for at least one special character
    if (!/[@#$%^&*]/.test(password)) {
        return false;
    }

    return true; // Password meets all criteria
}