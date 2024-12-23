
// Import the Mongoose library
const mongoose = require('mongoose');

// Establish a connection to the MongoDB database
// The URL specifies the database location and name
// "mongodb://127.0.0.1:27017/e-commerce" means:
// - Connect to the MongoDB instance running on localhost (127.0.0.1)
// - Use the port 27017 (default for MongoDB)
// - Access or create the "e-commerce" database
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
  useNewUrlParser: true, // Use the new URL string parser for MongoDB
  useUnifiedTopology: true // Use the new server discovery and monitoring engine
})
  .then(() => {
    console.log("Connected to MongoDB successfully."); // Log success message if connection is established
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message); // Log error message if connection fails
  });








// Simpe Code No try and catch

// const mongoose=require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
