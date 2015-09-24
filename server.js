'use strict';
const express = require('express');

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.render('index.jade');
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
