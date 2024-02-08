#!/usr/bin/node
const request = require('request'); 

const movieID = process.argv[2]; 

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(apiUrl, (error, response, body) => {

    if (error) {
        console.error('Error:', error.message);

    } else {
            const movieInfo = JSON.parse(body);
            console.log(`${movieInfo.title}`);
    }
});