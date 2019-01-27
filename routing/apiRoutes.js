var friendData = require("../data/friends.js")

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        
        // to get user details
        var user = req.body;
        console.log("user= " + JSON.stringify(user));
        

        for(var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        };

        var bestFriend = 0;
        var minDifference = 40;

        // loop through the scores and make sure negative numbers are not an option
        for(var i = 0; i < friendData.length; i++) {
            var totalDifference = 0;
            for(var x = 0; x < friendData[i].scores.length; x++) {
                var difference = Math.abs(user.scores[x] - friendData[i].scores[x]);
                totalDifference += difference;
            };
            console.log('friend = ' + JSON.stringify(friendData[i]));

            if(totalDifference < minDifference) {
                bestFriend = i;
                minDifference = totalDifference;
            };
        };
        // add user to array
        friendData.push(user);

        // send json info
        res.json(friendData[bestFriend]);
    });
};