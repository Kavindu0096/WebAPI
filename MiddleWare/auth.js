var express = require('express');
var app = express();
function authenticate(req, res, next) {
    console.log("Authenticated login...");
    next();

}
module.exports = authenticate;