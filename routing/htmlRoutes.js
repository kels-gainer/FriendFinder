var path = require("path");

module.exports = function(app){
    
    app.get("/", function(req, res) {
        // res.sendFile(path.join(__dirname + "/public/home.html"))
        // res.sendFile(path.join(__dirname + "../public", "/home.html"))
        res.sendFile('home.html', { root: path.join(__dirname, '../public') });
    });


    app.get("/survey", function(req, res) {
        res.sendFile('survey.html', { root: path.join(__dirname, '../public') });
    });
};