const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    // Write the response body to the file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${filePath} has been saved.`);
    });
});