// email.js

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Retrieve the email input value
    var email = document.getElementById('email').value;

    // Validate the email
    if (validateEmail(email)) {
        // If email is valid, allow form submission
        this.submit();
    } else {
        // If email is invalid, display error message
        document.getElementById('error').textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the pattern
    return emailPattern.test(email);
}