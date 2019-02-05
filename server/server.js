const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "Damon",
    text: "Hey. What is going on.",
    createAt: 123123
  });

  socket.on("createMessage", newMessage => {
    console.log("createMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User disconnect");
  });
});

server.listen(port, () => console.log(`Server is up on ${port}`));
