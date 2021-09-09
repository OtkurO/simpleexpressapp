const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/cats', (req, res) => {
  res.send('<h1>Cats Pages</h1>');
});
app.get('/cats/black', (req, res) => {
  res.send('<h1>Cats Pages--- black cats</h1>');
});
app.post('/cats/black', (req, res) => {
  res.send('<h1>black cats response</h1>');
  console.log('Log from /cats/black');
});
app.get('/dogs', (req, res) => res.send('<h1>Dogs Pages</h1>'));
app.get('/cats/search/', (req, res) => {
  let response = '<h1>Cats Page Search:</h1>';
  for (const key in req.query) {
    response += `<h2>${key}:  ${req.query[key]};`;
  }
  res.send(response);
  console.log(req.query);
});
// app.get('/cats/q=:subject&:id', (req, res) =>
//   res.send(
//     `<h1>cats/ Subject:${req.params.subject}, ID: ${req.params.id} </h1>`
//   )
// );

app.get('*', (req, res) => {
  res.send('<h1>Page Not found</h1>');
});

app.use(() => {
  console.log('We got a new request!!!!');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}!`));
