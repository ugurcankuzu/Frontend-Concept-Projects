const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const httpServer = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(httpServer, {
    cors: 'http://localhost:3000'
})

io.on('connect_error',(socket)=>{
    console.log("Error Occured");
    socket.destroy()
})
io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('change-nick', (userName) => {
        socket.userName = userName;
        console.log(`Nickname has taken successfully! ${socket.id} identified socket's name is ${socket.userName}`);
    })
    socket.on('change-room', (roomName) => {
        socket.join(roomName);
        socket.roomName = roomName;
    })
    socket.on("send-message", (socketMessage) => {
        io.to(socket.roomName).emit("get-message", {
            sender: socket.userName,
            content: socketMessage
        });
    })
})






httpServer.listen(5000, () => {
    console.log("Server activated!");
})