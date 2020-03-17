var users = require("../data/userData");
var path = require("path");
// var results = require("../data/resultsData")
module.exports = function(app){
    //post the results
    app.post("/api/results", function(req,res){
        users.push(req.body)
        console.log(req.body)
        res.sendFile(__dirname, "../public/results.html");
    })
    //
}

//route to test questions
//route to restults
//route to compatiple people