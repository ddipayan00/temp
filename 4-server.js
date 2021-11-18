const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req,res) => {
    console.log('Request Event');
    res.end('Hello World');
});
server.listen(5000, () => {
    console.log('Server listening on port : '+PORT);
});

