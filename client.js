const WebSocket = require("ws");

const serverAddress = "wss://innovative-somber-bluebell.glitch.me/";

const ws = new WebSocket(serverAddress, {
  headers: {
    "user-agent": "Mozilla",
  },
});

ws.on("open", function () {
  ws.send("TESTING...");
});

ws.on("message", function (msg) {
  console.log(msg);
});
