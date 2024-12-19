// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create array to store comments
var comments = [];

// Get comments
app.get('/', function(req, res) {
    res.send(comments);
});

// Add comment
app.post('/', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.send('Comment added');
});

// Start server
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});