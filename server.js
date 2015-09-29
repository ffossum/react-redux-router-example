var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.render('index.jade', {
    env: process.env.NODE_ENV
  });
});

app.listen(8080, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  var environment = process.env.NODE_ENV === 'production' ? 'Production' : 'Development';
  console.log(environment + ' environment');

  console.log('Listening at localhost:8080');
});
