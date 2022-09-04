const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const express = require('express')
const app = express()

// request => middleware => responce

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/users', [logger, authorize], (req, res) => {
  res.send('Users');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.listen(2200, () => {
  console.log("Server is listning on port 2200...")
});