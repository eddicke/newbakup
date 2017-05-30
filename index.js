var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
   console.log("new user")
  socket.on('chat message', function(msg){
   // io.emit('chat message', msg);
   io.broadcast.emit('chat message', msg);
    console.log("new user")
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
