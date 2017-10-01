const express = require('express');
const path = require('path');
const http = require('http');
const socketIO= require('socket.io');

let app = express();
let port = process.env.PORT || 3666;
const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('create new email: ', message);
    io.emit('newMessage', {
      'from': message.from,
      'text': message.text,
      'createdAt': new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('DISCONNECT in server.js');
  })
});

server.listen(port, function(){
  console.log('server running on port ', port);
});

