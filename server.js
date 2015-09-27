var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.render('index.jade');
});

app.listen(8080, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at localhost:8080');
});
