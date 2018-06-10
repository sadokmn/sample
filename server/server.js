const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const fs = require("fs");
const multer = require("multer");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

var dataSedadit = (dataLocation) => {
    var dataString = fs.readFileSync(dataLocation);
    var dataObj = JSON.parse(dataString) 
    return dataObj;
}



io.on("connection", (socket) => {
    

    socket.emit("arat", dataSedadit("./public/images/arat.json"));
    socket.emit("salon", dataSedadit("./public/images/salon.json"));
    socket.emit("megareja", dataSedadit("./public/images/megareja.json"));



    socket.on("disconnect", () => {

    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});