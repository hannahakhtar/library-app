"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.get('/api', function (req, res) {
    res.send('hello');
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
// how to do tsc automatically when you run npm run server
