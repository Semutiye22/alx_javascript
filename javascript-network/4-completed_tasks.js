const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Send a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    // Parse the JSON response body
    const todos = JSON.parse(body);
    // Initialize an object to store the count of completed tasks for each user
    const completedTasksByUser = {};
    // Iterate over the todos to count completed tasks by user
    todos.forEach(todo => {
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });
    // Print the completed tasks by user
    console.log(completedTasksByUser);
});