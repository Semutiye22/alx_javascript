// dynamic-form.js

document.getElementById('numFields').addEventListener('change', function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    validateForm();
});

function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous input fields

    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        input.placeholder = 'Field ' + i;
        inputContainer.appendChild(input);
    }
}

function validateForm() {
    var inputs = document.querySelectorAll('#inputContainer input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            // If any field is empty, display error message and prevent form submission
            alert('Please fill in all fields.');
            return;
        }
    }

    // If all fields are filled, allow form submission
    document.getElementById('dynamicForm').submit();
}