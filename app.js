var express = require('express');
var socket = require('socket.io');

var app = express();

const port = process.env.PORT || '8080';
app.set('port', port);
server = app.listen(port, function(){
    console.log(`Running on localhost:${port}`)
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});