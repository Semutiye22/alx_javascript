// Define the global variable
var globalVariable = 'Welcome';

// Define the outer function
function outer() {
    // Alert the content of the globalVariable
    alert(globalVariable);

    // Create the course variable
    var course = 'Holberton';

    // Define the inner function
    function inner() {
        // Alert the content of the globalVariable and course concatenated
        alert(globalVariable + ' ' + course);

        // Create the exclamation variable
        var exclamation = '!';

        // Define the inception function
        function inception() {
            // Alert the content of the globalVariable, course, and exclamation concatenated
            alert(globalVariable + ' ' + course + exclamation);
        }

        // Call the inception function
        inception();
    }

    // Call the inner function
    inner();
}

// Call the outer function
outer();