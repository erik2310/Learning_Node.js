var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var messages = [
    {name: "Tim", message: "Hi"},
    {name: "Jane", message: "Hello"}
]

app.get("/messages", function(req, res) {
    res.send(messages);
});

app.post("/messages", function(req, res) {
    messages.push(req.body);
    io.emit("message", req.body);
    res.sendStatus(200);
});

io.on("connection", function(socket) {
    console.log("a user connected");
})

var server = http.listen(3000, function() {
    console.log("server is listening on port", server.address().port);
});