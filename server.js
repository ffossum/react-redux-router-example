var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.render('index.jade', {
    env: process.env.NODE_ENV
  });
});

// usernames currently connected to the chat
var users = {};

io.on('connection', socket => {
  var addedUser = false;

  socket.on('new message', data => {

    socket.broadcast.emit('new message', {
      user: socket.username,
      text: data
    });
  });

  socket.on('add user', username => {

    if (addedUser) {
      delete users[socket.username];
      socket.broadcast.emit('user left', {
        username: socket.username
      });
    }

    if (users[username]){
      socket.emit('username taken');
    } else {

      socket.username = username;
      users[username] = username;
      addedUser = true;
      socket.emit('login', {
        users: users
      });

      socket.broadcast.emit('user joined', {
        username: socket.username
      });
    }
  });

  socket.on('disconnect', () => {

    if (addedUser) {
      delete users[socket.username];
      socket.broadcast.emit('user left', {
        username: socket.username
      });
    }
  });
});

server.listen(8080, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  var environment = process.env.NODE_ENV === 'production' ? 'Production' : 'Development';
  console.log(environment + ' environment');

  console.log('Listening at localhost:8080');
});
