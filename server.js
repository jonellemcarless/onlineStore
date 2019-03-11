var express = require("express");
var mongojs = require("mongojs");

var logger = require("morgan");
var mongoose = require("mongoose");
// var sequelize = require("sequelize")

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
var User = require("./userModel.js");
// var Products = require("./productModel.js");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/onlineStore", { useNewUrlParser: true });

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "onlineStore";
var collections = ["Products"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Home Page");
});

// 2. Route for login page
// app.get("/login", function(req, res) {
//   res.send("Login Page");
// });


// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
