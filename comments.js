// Create web server
// Set up express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set up body parser
app.use(bodyParser.json());

// Create comments array
const comments = [
    {
        username: 'Alice',
        comment: 'I love this article!'
    },
    {
        username: 'Bob',
        comment: 'This article is terrible!'
    }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
}