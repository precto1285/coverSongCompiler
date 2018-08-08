//Dependencies
var path = require("path");

//Routes

module.exports = function(app) {

    //index route loads main.html
    app.get("/", function(req, res) {
        res.sendFile(path.join("../public/main.html"));
    });
};