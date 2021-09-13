const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const forumData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
let sum = 0;
app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 101);
  sum += randomNumber;
  res.render('home', { randomNumber, sum });
});

app.get('/topics/:subtopic', (req, res) => {
  const topic = req.params.subtopic.toLowerCase();
  const data = forumData[topic]
    ? forumData[topic]
    : {
        name: `The topic you searched:${topic}`,
        description: `Sorry, no relevant topic can be found.`,
        subscribers: null,
      };
  res.render('subtopic', { ...data });
});

app.get('/cars', (req, res) => {
  const carModels = {
    ModelX: 'Electric Vehicle Manufactured by Tesla,Inc.',
    LEAF: 'Electric Vehicle Manufactured by Nissan Motor Co., Ltd.',
    MachE: 'Electric SUV Manufactured by Ford',
  };
  res.render('cars', { carModels });
});
// app.get('/cats/black', (req, res) => {
//   res.send('<h1>Cats Pages--- black cats</h1>');
// });
// app.post('/cats/black', (req, res) => {
//   res.send('<h1>black cats response</h1>');
//   console.log('Log from /cats/black');
// });

// // using query string parameters in route (example:/search/?q=cat&id=12)
// app.get('/cats/search/', (req, res) => {
//   let response = '<h1>Cats Page Search:</h1>';
//   for (const key in req.query) {
//     response += `<h2>${key}:  ${req.query[key]};`;
//   }
//   res.send(response);
//   console.log(req.query);
// });

//using req path parameters (:parameter)
// app.get('/cats/q=:subject&:id', (req, res) =>
//   res.send(
//     `<h1>cats/ Subject:${req.params.subject}, ID: ${req.params.id} </h1>`
//   )
// );

app.get('*', (req, res) => {
  res.send('<h1> 404 --Page Not found</h1>');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}!`));
