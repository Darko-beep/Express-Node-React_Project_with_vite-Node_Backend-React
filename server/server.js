//import express
const express = require('express');
const app = express();
//import cors
const cors = require('cors');

//use cors middleware
const corsOptions = {
  origin: 'http://localhost:3000', // React app URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};


//define a route
app.get('/api', (req, res) => {
  res.json( {fruits: ['apple', 'banana', 'orange']} );
});

//start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
