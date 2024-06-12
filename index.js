const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/cliente/index.html');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
