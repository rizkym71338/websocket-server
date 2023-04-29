const express = require("express");
const cors = require("cors");
const { Server } = require("ws");

const app = express();

app.use(cors());

const wss = new Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected.");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // send message back to client
    ws.send(`Server received message: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
