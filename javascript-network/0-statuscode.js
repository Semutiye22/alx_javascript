const http = require('http');

// Get the URL from the command line arguments
const url = process.argv[2];

// Send a GET request to the URL
http.get(url, (response) => {
    // Display the status code
    console.log(`code: ${response.statusCode}`);
}).on('error', (error) => {
    console.error(error);
});