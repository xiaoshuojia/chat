
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('hello', 'hi');  // 发送给每个连接的用户
  socket.on('message', function(msg){
    console.log('user: ' + msg.user + '\n' + 'message: ' + msg.message);
    io.emit('chat message', msg);
    // console.log('message: ' + msg);

  });
  socket.on('hello', function(msg){
    console.log('message: ' + msg);
  })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
