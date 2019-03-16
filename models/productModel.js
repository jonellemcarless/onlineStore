var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ProductSchema object
// This is similar to a Sequelize model
var ProductSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  itemid: {
    type: Number,
    trim: true,
    required: "Product Name is Required"
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  productname: {
    type: String,
    trim: true,
    required: "Product Name is Required",

  },

  price : {
    type: Number,
    
  },

  stock: {
    type: Number,

  },
  // `date` must be of type Date. The default value is the current date
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Products = mongoose.model("Products", ProductSchema);

// Export the Products model
module.exports = Products;
