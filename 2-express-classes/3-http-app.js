const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// });

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource is not found...</h1>');
});

app.listen(2200, () => {
  console.log("Server is listning on port 2200...")
});