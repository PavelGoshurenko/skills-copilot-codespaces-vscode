// Create web server
const http = require('http');
// Import the comments module
const comments = require('./comments.js');

// Create a server
http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Check if the URL is /comments
    if (req.url === '/comments') {
        // Call the getComments function
        comments.getComments(req, res);
    }
}).listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
// End of comments.js