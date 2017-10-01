
var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(data){
  console.log('New email: ', data)
});

// socket.emit with ACKNOWLEDGMENT callback function as 3rd argument
// 'data' parameter in callback receives info back from server

socket.emit('createMessage', {
  'from': 'Jerry',
  'text': 'transitive'
}, function(data){
  console.log('Acknowledged!!!!', data);
});