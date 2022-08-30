const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');

  // console.log(req);
  // res.write('Welcome to my home page');
  // res.end();

  if (req.url === '/') {
    res.end('Welcome to my home page');
  };
  if (req.url === '/about') {
    res.end('Here is ourshort history');
  };
  if (req.url === '/error') {
    res.end(`
    <h1>Oops!!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">go back to home</a>
    `);
  };
});

server.listen(5000);
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });