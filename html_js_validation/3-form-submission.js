// form-submission.js

document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Retrieve form field values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validate form fields
    if (!name || !email) {
        // If any required field is empty, display error message and return
        document.getElementById('error').textContent = 'Please fill in all required fields.';
        return;
    }

    // Clear any previous error messages
    document.getElementById('error').textContent = '';

    // Display success message
    alert('Form submitted successfully!');
});