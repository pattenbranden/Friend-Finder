var users = require("../data/userData");
var path = require("path");

// var results = require("../data/resultsData")
module.exports = function (app) {
    app.get("/api/userData", function(req, res) {
        res.json(friends);
      });

    app.post("/api/userData", function (req, res) {
        //keep track of difference
        var totalDifference = 0;
        //set a default object
        var bestMatch = {
          name: "Default",
          photo: "Default Photo URL",
          friendDifference: 1000
        };
        // set variables for submitted object 
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;
        
        var b = userScores.map(function(item) {
          return parseInt(item, 10);
        });
        // create user object with variables from submitted object 
        userData = {
          name: req.body.name,
          photo: req.body.photo,
          scores: b
        };
    
        console.log("Name: " + userName);
        console.log("User Score " + userScores);
        sum 
        var sum = b.reduce((a, b) => a + b, 0);
    
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log("+++++++=================++++++++++");
    
        for (var i = 0; i < users.length; i++) {
          console.log(users[i].name);
          totalDifference = 0;
          console.log("Total Diff " + totalDifference);
          console.log("Best match friend diff " + bestMatch.friendDifference);
    
          var bfriendScore = users[i].scores.reduce((a, b) => a + b, 0);
          console.log("Total friend score " + bfriendScore);
          totalDifference += Math.abs(sum - bfriendScore);
          console.log("-------------------------> " + totalDifference);
    
          if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = users[i].name;
            bestMatch.photo = users[i].photo;
            bestMatch.friendDifference = totalDifference;
          }
          console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);
    
        users.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);
      });

}


//route to test questions
//route to restults
//route to compatiple people