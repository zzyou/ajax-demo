// npm install request, library
const request = require('request');

const baseURL = 'https://swapi.co/api/';

// callback based:
request(baseURL + 'planets/1', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body);
});



// npm install axios, library
const axios = require('axios');

// promise based:
axios.get(baseURL + 'people/1')
    .then(request => {
        console.log(request);
    })
    .catch(error => {
        console.log(error);
    });

