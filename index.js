// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Requiring Models
var db = require("./models");

//parse application urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//Static directory
app.use(express.static("public"));

//Routes
require("../routes/api-routes.js")(app);
require("../routes/html-routes.js")(app);

//Synching sequelize models and then start Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});