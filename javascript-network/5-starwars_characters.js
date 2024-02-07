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
    // Retrieve the characters for the movie
    const characters = movie.characters;
    // Iterate over the characters and print their names
    characters.forEach(characterUrl => {
        request.get(characterUrl, (error, response, body) => {
            if (error) {
                console.error(error);
                return;
            }
            // Parse the JSON response body for the character details
            const character = JSON.parse(body);
            // Print the character name
            console.log(character.name);
        });
    });
});