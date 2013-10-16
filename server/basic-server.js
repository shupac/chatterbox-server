var http = require("http");
var url = require('url');
var requestHandler = require("./request-handler.js");
// var port = process.env.port || 8080;
// var ip = process.env.IP || "127.0.0.1";


var server = http.createServer(function(req, res){
  console.log(req.url);
  var route = url.parse(req.url).pathname;
  switch (route) {
    default:
    requestHandler.handleRequest(req, res);
    break;
  }
});

server.listen(8080, '127.0.0.1');
// server.listen(process.env.PORT || 5000);