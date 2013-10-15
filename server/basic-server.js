var http = require("http");
var requestHandler = require("./request-handler.js");
var port = process.env.port || 8080;
var ip = process.env.IP || "127.0.0.1";
var server = http.createServer(requestHandler.handleRequest).listen(process.env.port || 5000);
console.log("Listening on http://" + ip + ":" + port);
