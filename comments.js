// Create web server
// Use express.js
// Use express.Router() to create a router
// Use app.use() to use the router
// Create a route for GET /comments
// Send a JSON response with the comments array
// Use app.listen() to start the server
// Listen on port 3000
// Start the server and test the route with Postman

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'this is so dumb' },
  { username: 'HapppyFeet', comment: 'cool cool cool' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
