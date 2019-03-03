// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
// code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
var fs = require('fs');
// be able to access your keys information like so

var axios = require("axios");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var argu = process.argv;
var referen = [];
var theSong = "";
var theMovie = "";
var theBand = "";
var filetext = "random.txt";
var fullCommand = [];

for (var i =3; i <argu.length; i++) {
    referen.push(arg[i])
}

var referenceBand = referen.join("");

fullCommand.push(command);