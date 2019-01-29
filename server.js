var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    
});