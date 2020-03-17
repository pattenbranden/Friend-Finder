var users = require("../data/userData");
var path = require("path");
// var results = require("../data/resultsData")
module.exports = function(app){
    // Route to main splash screen 
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    // show the quiz
    app.get("/quiz", function(req,res){
        res.sendFile(path.join(__dirname, "../public/quiz.html"))
    });
    //show the results
    app.get("/results", function(req,res){
        res.sendFile(path.join(__dirname, "../public/results.html"))
    });
    //
}

//route to test questions DONE
//route to restults
//route to compatiple people