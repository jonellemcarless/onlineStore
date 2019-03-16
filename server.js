const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

// Initialize Express
const app = express();

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

// process.env.port is Heroku's port
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));




// const PORT = 2000;  
// const mongojs = require("mongojs");

// const logger = require("morgan");

// var sequelize = require("sequelize")

// Requiring the `User` model for accessing the `users` collection
// var User = require("./userModel.js");
// var Products = require("./productModel.js");

// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Make public a static folder
// app.use(express.static("public"));





// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/onlineStore", { useNewUrlParser: true });

// // Database configuration
// // Save the URL of our database as well as the name of our collection
// var databaseUrl = "onlineStore";
// var collections = ["Products"];

// // Use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);

// // This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// // Routes
// // 1. At the root path, send a simple hello world message to the browser
// app.get("/", function(req, res) {
//   res.send("Home Page");
// });

// // 2. Route for login page
// // app.get("/login", function(req, res) {
// //   res.send("Login Page");
// // });


// // Routes

// // Route to post our form submission to mongoDB via mongoose
// app.post("/", function(req, res) {
//   // Create a new user using req.body
//   User.create(req.body)
//     .then(function(dbUser) {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
// });

// // Route to post our form submission to mongoDB via mongoose
// app.post("/submit", function(req, res) {
//   // Create a new user using req.body
//   User.create(req.body)
//     .then(function(dbUser) {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
// });

// // Start the server
// app.listen(PORT, function() {
//   console.log("App running on port " + PORT + "!");
// });
