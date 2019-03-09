var express = require("express");
var mongoose = require("mongoose");
var Products = require("./productModel");

// Initialize Express
var app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to Mongo DB
mongoose.connect('mongodb://localhost:27017/onlineStore', {useNewUrlParser: true});

// Routes

app.get("/productModel"),
app.post("/public/productPage.html", function(request, response) {
    Products.create(request.body).then(function(productPage))
}
);