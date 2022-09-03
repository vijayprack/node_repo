const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('User hit the resource');
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('/*', (req, res) => {
  res.status(404).send('<h1>Resource is not found...</h1>');
});

app.listen(2200, () => {
  console.log("Server is listning on port 2200...")
});

// app.GET
// app.POST
// app.PUT
// app.DELETE
// app.all
// app.use
// app.listen