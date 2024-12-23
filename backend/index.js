// Import the required modules
const express = require("express");// Express framework for creating the server

// Import and execute the database configuration file
require("./db/config");

// Import the User model from the db directory
const User = require("./db/User");

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST API endpoint to register a new user
app.post("/register", async (req, resp) => {
    try {
      // Create a new user instance with the request body data
      let user = new User(req.body);
      
      // Save the user data to the database
      let result = await user.save();
      
      // Send the saved user data as the response
      resp.send(result);
    } catch (error) {
      // Handle any errors during the process
      resp.status(500).send({ error: "Failed to register user" });
    }
  });
  
  // Start the server on port 5000
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });




// Basic connection Nose+MongoDB

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/e-comm', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 30000,
//         });
//         console.log('Database connected successfully');

//         // Specify the collection name explicitly
//         const productSchema = new mongoose.Schema({});
//         const Product = mongoose.model('Product', productSchema, 'product');

//         // Fetch data
//         const data = await Product.find();
//         console.log('Data from the database:', data);
//     } catch (error) {
//         console.error('Error connecting to the database:', error.message);
//     }
// };

// connectDB();

// app.listen(5000, () => {
//     console.log('Server running on http://localhost:5000');
// });
