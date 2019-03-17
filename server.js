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
