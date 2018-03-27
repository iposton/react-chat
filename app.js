var express = require('express');
var socket = require('socket.io');
const http = require('http');
const path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, 'build')));

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