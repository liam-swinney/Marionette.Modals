var express = require('express');
var app = express();

app.use(express.static(__dirname)).listen(process.env.PORT || 8080);