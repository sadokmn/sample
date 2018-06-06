const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const fs = require("fs");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


var dukanString = fs.readFileSync("./public/data/data.json");

var dukanObj = JSON.parse(dukanString) 



io.on("connection", (socket) => {
    

    socket.emit("dukan", dukanObj)



    socket.on("disconnect", () => {

    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});