let express = require ('express');
let static = require('node-static');
const WebSocket = require('ws');
const portNumber=4200;
const imageDataURI = require('image-data-uri')

let app=express();

const fs = require('fs');

let server = require('http').createServer(app);

const wss = new WebSocket.Server({server});

app.use(express.static(__dirname+'/public'));

app.use('/wsc', wscClientRoute)

function wscClientRoute(req,res,next){
    res.sendFile(__dirname+'/public/ws.html');
}

app.get("/", function(req,res){
    res.send('<h1>Hello World</h1>')
})

server.listen(portNumber, function(){
    console.log("connected");
})

// IMPLEMENT THE BROADCAST FUNCTION TO ALL
wss.broadcast = function broadcast(data) {
    //get all clients (note that the Socket server instance does maintain a list of clients)
    wss.clients.forEach(function each(client) {
        //if client is there
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};

wss.on('connection', function connection(ws, req){
    const in_ip = req.socket.remoteAddress;
    console.log("client connected"+in_ip);

ws.on("message", function incoming(message){

console.log(JSON.parse(message));

let messageJson = JSON.parse(message);
if(messageJson.eventName === "default"){
console.log(messageJson.payload);

}

if(messageJson.eventName === "stringLabel"){
    console.log(messageJson.payload);
    wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messageJson.payload));
           }
       });
}
if(messageJson.eventName === "jsonLabel"){
    console.log(messageJson.payload.text);
    wss.broadcast(messageJson.payload);
}
if(messageJson.eventName === "fileLabel"){
    console.log(messageJson.payload.text);
// fs.writeFile("test.jpg", message, 'binary', function(err){

//     if(err)throw err;
//     console.log("file saved");
// })
let decodedFile = imageDataURI.decode(messageJson.payload.fileData);
            fs.writeFile(messageJson.payload.fileName, decodedFile.dataBuffer, function (err) {
                if (err) throw err;
                console.log('File saved.')
            });
}
// ws.send("test message from server");
 
//ADD
  let jsonSend = {
    type: "message",
    text: "test message from server",
  };
 
  //NEW 
  ws.send(JSON.stringify(jsonSend));
})})
