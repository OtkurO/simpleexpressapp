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
app.get('/cats/:subject', (req, res) =>
  res.send(`<h1>Generic /cats/ ${req.params.subject}</h1>`)
);

app.use(() => {
  console.log('We got a new request!!!!');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}!`));
