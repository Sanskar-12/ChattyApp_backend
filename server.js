import express from "express"
import {createServer} from "http"
import {Server} from "socket.io"

const app=express()

const server=createServer(app)

const io=new Server(server,{
    cors: {
        origin: "*",
      }
})

io.on("connection",(socket)=>{
    console.log("What is Socket:",socket)
    console.log("Socket is active to be Connected")

    socket.on("chat",(payload)=>{
        console.log("What is payload",payload)
        io.emit("chat",payload)
    })
})

server.listen(5000,()=>{
    console.log("Server is Listening on port:5000")
})



