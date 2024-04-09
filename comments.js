// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments.js');

// Use comments
app.use('/comments', comments);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});