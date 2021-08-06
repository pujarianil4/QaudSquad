const app = require('./index');

const connect = require("./config/db");
const express = require('express')
const http =require('http')
const cors = require('cors')


const {userJoin,getGroupUsers,getCurrentUser} = require('./utils/users')
const {formateMessage} = require('./utils/message')
const server = http.createServer()

const socketio = require('socket.io')
// const { Socket } = require('dgram')

const io = socketio(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})

require('./routes')(app)

const chatBotName = "Learning School"


io.on('connection',(socket)=>{
    console.log("User Connected")

    // Joining the group
    socket.on('joinGroup',({username,group})=>{
        console.log({username,group})  
        const user = userJoin(socket.id,username,group)
        socket.join(user.group)

        // Welcome the user to group
        socket.emit("message",formateMessage(chatBotName,`Welcome to ${group} group`))

        // Send nortification to existing members ====Broadcast

        socket.broadcast.to(user.group)
        .emit('message',formateMessage(chatBotName,`${user.username} has joined the chat`))


         //send list of users in the group
        io.to(group).emit('groupUsers',
        {group,users:getGroupUsers(user.group)})

        socket.on("chatMessage",message=>{
            const user =getCurrentUser(socket.id,username,group)

            io.to(user.group).emit('message',
            formateMessage(user.username,message))
        })
    })


   
    socket.on("disconnect",()=>{
        console.log("Users Disconnected")
    })

})

const PORT = 2244;

server.listen(PORT,async()=>{
    await connect();
    console.log("Listing on port 2244")
})