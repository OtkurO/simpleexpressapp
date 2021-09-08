const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/cats', (req, res) => res.send(path.join(__dirname, '/cats.html')));
app.get('/dogs', (req, res) => {
  // res.send(path.join(__dirname, '/dogs.html'));
  res.send({ dog1: 'Paw', dog2: 'Hund' });
});

app.use(() => {
  console.log('We got a new request!!!!');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}!`));
