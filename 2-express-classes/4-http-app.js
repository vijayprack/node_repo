const express = require('express')
const app = express()
const {products, users} = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href = "/api/user">users</a>');
});

app.get('/api/user', (req, res) => {
  const newUser = users.map((user) => {
    const {userId, firstName, lastName} = user;
    return {userId, firstName, lastName};
  });
  res.json(newUser);
});

app.get('/api/user/:userId', (req, res) => {
  const {userId} = req.params;
  const singleUser = users.find((user) => user.userId === Number(userId));
  if (!singleUser) {
    return res.status(404).send('User does not exist')
  } else {
  res.json(singleUser);
  };
});

app.get('/api/user/:userId/reviews/:reviewId', (req, res) => {
  console.log(req.params);
  res.send('Hello World');
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const {search, limit} = req.query
  let sortedUsers = [...users]

  if (search) {
    sortedUsers = sortedUsers.filter((user) => {
    return user.firstName.startsWith(search);
    });
  };
  if (limit) {
    return sortedUsers = sortedUsers.slice(0, Number(limit));
  };
  if (sortedUsers.length < 1) {
    // res.status(200).send("No Users matched to your search")
    return res.status(200).json({sucess: true, data:[]})
  }
  res.status(200).json(sortedUsers);
  // res.send('Hello World');
});

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>Resource is not found...</h1>');
// });

app.listen(2200, () => {
  console.log("Server is listning on port 2200...")
});