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

  // when the client emits 'new message', this listens and executes
  socket.on('new message', data => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      user: socket.username,
      text: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', username => {
    // remove the username from global users list
    if (addedUser) {
      delete users[socket.username];

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username
      });
    }
    // we store the username in the socket session for this client
    socket.username = username;
    // add the client's username to the global list
    users[username] = username;
    addedUser = true;
    socket.emit('login', {
      users: users
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    // remove the username from global users list
    if (addedUser) {
      delete users[socket.username];

      // echo globally that this client has left
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
