var users = require("../data/userData");
var path = require("path");

// var results = require("../data/resultsData")
module.exports = function (app) {
    //post the results
    // app.post("/api/results", function(req,res){
    //     users.push(req.body)
    //     console.log(req.body)
    //     res.sendFile(__dirname, "../public/results.html");
    // })
    //
    app.post("/api/userData", function (req, res) {
        var newUser = req.body;
        var newUserScores = req.body.scores;
        var absArr = [];
        console.log(newUser)
        for (var i = 0; (users.length - 1); i++) {
            console.log("________________________________________\n" + users[i].name + "\n" + users[i].photo)
            var databaseUserScores = users[i].scores;
            var difference = 0;
            for (var j = 0; j < databaseUserScores.length; j++) {
                difference += (Math.abs(databaseUserScores[j] - newUserScores[j]))
            }
            absArr.push(difference);
            console.log("________________________________________\n")
        }
        var lowestAbs = Math.min(...absArr);
        var match = absArr.indexOf(lowestAbs);

        res.json(users[match]);
        users.push(newUser);

    })

    app.get("/api/userData", function (req, res) {
        res.json(users);
    })

}


//route to test questions
//route to restults
//route to compatiple people