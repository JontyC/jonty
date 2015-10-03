var net = require('net');

var server = net.createServer(function (socket) {

  console.log("Connection from:" + socket.remoteAddress);
  socket.end("Hi, i'm Jonty\n");

});

server.listen(4998, "localhost");

console.log("TCP server listening on localhost port 4998");
