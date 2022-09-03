const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage =  readFileSync('./navbar-app/index.html');
const homeStyle =  readFileSync('./navbar-app/styles.css');
const homeLogo =  readFileSync('./navbar-app/logo.svg');
const homeLogic =  readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url

  // home page
  // res.writeHead(200, {'content-type': 'text/plain'});
  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(homePage);
    res.end();
  } 
  // about page
  else if (url === '/style.css') {
    res.writeHead(200, {'content-type': 'text/css'});
    res.write(homeStyle);
    res.end();
  }
  else if (url === '/logo.svg') {
    res.writeHead(200, {'content-type': 'image/svg+xml'});
    res.write(homeLogo);
    res.end();
  }
  else if (url === '/browser-app.js') {
    res.writeHead(200, {'content-type': 'text/javascript'});
    res.write(homeLogic);
    res.end();
  }
  // 404 error
  else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h1>Page Not Found</h1>');
    res.end();
  }
});

server.listen(2000);