// Pull in our required dependencies (namely express, mongoose and bodyParser)
// Initialize our app using express()
// Apply the middleware function for bodyparser so we can use it
// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
// Set the port for our server to run on and have our app listen on this port

const express = require("express");
const favicon = require('express-favicon');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path")

const users = require("./routes/api/users");

// process.env.port is Heroku's port
const PORT = process.env.PORT || 5000; 

// Initialize Express
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo DB
mongoose.connect(db, { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// process.env.port is Heroku's port
// const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
