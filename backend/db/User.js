// Import the Mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Define the schema for the "users" collection
// A schema defines the structure and data types of the documents in the collection
const userSchema = new mongoose.Schema({
    name: String,      // Field to store the user's name (type: String)
    email: String,     // Field to store the user's email address (type: String)
    password: String   // Field to store the user's password (type: String)
});

// Export the model for the "users" collection
// The model is a wrapper for the schema and provides methods to interact with the database
// Parameters: 
// - "users": The name of the collection in the database
// - userSchema: The schema used to define the structure of the collection
module.exports = mongoose.model("users", userSchema);








// Simpe Code No try and catch

// const mongoose=require('mongoose');

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// });

// module.exports=mongoose.model("users",userSchema);
