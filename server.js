//Require express.
const express = require('express');

//assign express to app for easy functionality
const app = express();

//configure the port express will listen to, either the defined enviornment's port, or 8080.
var PORT = process.env.PORT || 8080;

// Listens to the url for encoded information???? 
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// require two additional js files for routing. 
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//Now we listen to the port we configured at the top.
app.listen(PORT, function(){
    console.log("Server online, listening on PORT: " + PORT)
})