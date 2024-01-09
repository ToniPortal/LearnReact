// route.js - route module.
const express = require("express");
const control = express.Router();

control.post('/login', function (req, res) {

    console.log("Test")

});

control.get('/test', function (req, res) {

    console.log("Test")

});



module.exports = control;