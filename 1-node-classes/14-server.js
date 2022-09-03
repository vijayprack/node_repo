const http = require('http');

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.end('Home page');
  };
  if (req.url === '/about') {
    // Blocking code !!!
    for(i = 0; i <= 1000; i++) {
      for(j = 0; j <= 1000; j++) {
        console.log(`${i}${j}`)
      };
    };
    res.end('About page');
  };
  if (req.url === '/error') {
    res.end('Error page');
  };
});

server.listen(5050, () => {
  console.log("Server is listening on port 5050...")
});
