const { Server } = require("ws");

const wss = new Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected.");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received message: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});

console.log(new Date() + " Server is listening on port 8080");
