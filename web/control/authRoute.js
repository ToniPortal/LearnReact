// route.js - route module.
const express = require("express");
const control = express.Router();

control.post('/login', function (req, res) {

console.log("req",req.body)

    res.status(200).json({
        "title": "The Basics - Networking",
        "description": "Your app fetched this from a remote endpoint!",
        "movies": [
            { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
            { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
            { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
            { "id": "4", "title": "Inception", "releaseYear": "2010" },
            { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
        ]
    })

});

control.get('/test', function (req, res) {

    console.log("Test")
});



module.exports = control;