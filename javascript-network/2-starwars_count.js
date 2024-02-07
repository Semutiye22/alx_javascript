const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Send a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    // Parse the JSON response body
    const films = JSON.parse(body).results;
    // Filter films where "Wedge Antilles" is present
    const moviesWithWedge = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
    // Display the number of movies with "Wedge Antilles"
    console.log(moviesWithWedge.length);
});