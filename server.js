const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client connected.");

  socket.on("message", (data) => {
    console.log(`Received message: ${data}`);

    // echo the message back to the client
    socket.send(data);
  });

  socket.on("close", () => {
    console.log("Client disconnected.");
  });
});
