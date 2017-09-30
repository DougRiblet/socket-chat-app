
var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    'from': 'Julio',
    'text': 'Hey buddy'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(data){
  console.log('New email: ', data)
});