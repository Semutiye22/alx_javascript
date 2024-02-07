const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL
const url = https://swapi-api.alx-tools.com/api/films/${movieId};

// Send a GET request to the URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    // Parse the JSON response body
    const movie = JSON.parse(body);
    // Display the title and episode number of the movie
    console.log(`Correct output - episode ${movie.episode_id}: ${movie.title}`);
});