const http = require('http');
const PORT = process.env.PORT || 5001;
const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write(`<a href="/about">Go to about section</a><br><a href="/projects">Go to projects section</a><br><a href="/contact">Go to contact section</a><br>`);
        res.end(`Welcome to our homepage`);
    }
    else if(req.url === '/contact') {
        res.write(`<a href="/">Back to home</a><br>`);
        res.end(`Welcome to our contact section`);
    }
    else if(req.url === '/projects') {
        res.write(`<a href="/">Back to home</a><br>`);
        res.end(`Welcome to our projects section`);
    }
    else if(req.url === '/about') {
        res.write(`<a href="/">Back to home</a><br>`);
        res.end('Welcome to our about section');
    }
    else {
        res.end(`<h1>Error 404</h1><h2>Page not found</h2>
        <a href="/">Back to home</a>`);
    }
});
console.log("Server stared at port : "+PORT);
server.listen(PORT);


