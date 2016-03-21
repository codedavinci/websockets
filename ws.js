var WSServer = require("ws").Server;
var wss = new WSServer({port: 3000});

wss.on("connection", function(ws){
   
    ws.send("You're Online in our chat")
});